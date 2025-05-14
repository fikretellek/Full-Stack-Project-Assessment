\c videorec;

DROP TABLE IF EXISTS videos CASCADE;

-- Create the videos table with all necessary columns
CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    src VARCHAR(255) NOT NULL,
    rating NUMERIC(3,2) DEFAULT 0,
    rating_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- you can insert more rows using example data from the example_data.csv file
--postgres://postgres.eileyhpjamfueembksor:[Full-Stack-Project-Assessment]@aws-0-us-west-1.pooler.supabase.com:5432/postgres
--psql -h aws-0-us-west-1.pooler.supabase.com -U postgres.eileyhpjamfueembksor postgres
--password:Full-Stack-Project-Assessment