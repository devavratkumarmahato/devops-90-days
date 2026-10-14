-- Create the tasks table if it doesn't already exist
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample tasks so the app has data on first launch
INSERT INTO tasks (title, description) VALUES
  ('Learn Docker', 'Build a microservices app'),
  ('Learn Kubernetes', 'Deploy to a cluster'),
  ('Learn Terraform', 'Infrastructure as code');
