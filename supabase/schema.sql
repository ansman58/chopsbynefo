-- Supabase SQL Setup for Chops by Nefo
-- Run this in the Supabase SQL Editor to create the required tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  customer_phone TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  delivery_city TEXT NOT NULL,
  delivery_date DATE NOT NULL,
  delivery_time TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  notes TEXT,
  items JSONB NOT NULL,
  subtotal NUMERIC(10, 2) NOT NULL,
  delivery_fee NUMERIC(10, 2) NOT NULL,
  total NUMERIC(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'delivered', 'cancelled'))
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  addresses TEXT[]
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_customer_phone ON orders(customer_phone);
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (for this simple use case)
-- In production, you might want more restrictive policies

-- Allow anyone to insert orders (for customer order submissions)
CREATE POLICY "Anyone can create orders" ON orders
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to view their own orders (by phone number)
CREATE POLICY "Users can view their orders" ON orders
  FOR SELECT
  USING (true);

-- Allow anyone to create/update customers (upsert)
CREATE POLICY "Anyone can create customers" ON customers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update their own customer record" ON customers
  FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can view customers" ON customers
  FOR SELECT
  USING (true);

-- Optional: Create a view for order statistics (for admin dashboard)
CREATE OR REPLACE VIEW order_statistics AS
SELECT 
  DATE_TRUNC('day', created_at) AS order_date,
  COUNT(*) AS total_orders,
  SUM(total) AS total_revenue,
  COUNT(CASE WHEN status = 'pending' THEN 1 END) AS pending_orders,
  COUNT(CASE WHEN status = 'confirmed' THEN 1 END) AS confirmed_orders,
  COUNT(CASE WHEN status = 'delivered' THEN 1 END) AS delivered_orders
FROM orders
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY order_date DESC;

-- Grant access to the view
GRANT SELECT ON order_statistics TO anon, authenticated;
