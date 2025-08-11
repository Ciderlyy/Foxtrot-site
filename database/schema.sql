-- Users table for authentication
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  rank VARCHAR(20) NOT NULL,
  unit VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Access logs for audit trail
CREATE TABLE access_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  action VARCHAR(50) NOT NULL,
  page_accessed VARCHAR(100),
  ip_address INET,
  user_agent TEXT,
  timestamp TIMESTAMP DEFAULT NOW()
);

-- Failed login attempts for security
CREATE TABLE failed_logins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  ip_address INET,
  timestamp TIMESTAMP DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_access_logs_user_id ON access_logs(user_id);
CREATE INDEX idx_access_logs_timestamp ON access_logs(timestamp);
CREATE INDEX idx_failed_logins_username ON failed_logins(username);
CREATE INDEX idx_failed_logins_timestamp ON failed_logins(timestamp);

-- Insert default admin user (password: P@ssw0rd)
-- You'll need to hash this password using bcrypt
INSERT INTO users (username, password_hash, rank, unit, email) VALUES (
  'admin',
  '$2a$10$your_hashed_password_here',
  '3SG',
  '10C4I Foxtrot',
  'admin@foxtrot.saf.sg'
);
