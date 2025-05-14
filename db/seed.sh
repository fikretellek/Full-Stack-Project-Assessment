#!/bin/bash

export PGPASSWORD="password"

psql -h db -U postgres -d videorec -p 5432 <<EOF
DO
\$do\$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Never Gonna Give You Up' AND src = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ') THEN
    INSERT INTO videos (title, src) VALUES ('Never Gonna Give You Up', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'The Coding Train' AND src = 'https://www.youtube.com/watch?v=HerCR8bw_GE') THEN
    INSERT INTO videos (title, src) VALUES ('The Coding Train', 'https://www.youtube.com/watch?v=HerCR8bw_GE');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Mac & Cheese | Basics with Babish' AND src = 'https://www.youtube.com/watch?v=FUeyrEN14Rk') THEN
    INSERT INTO videos (title, src) VALUES ('Mac & Cheese | Basics with Babish', 'https://www.youtube.com/watch?v=FUeyrEN14Rk');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Videos for Cats to Watch - 8 Hour Bird Bonanza' AND src = 'https://www.youtube.com/watch?v=xbs7FT7dXYc') THEN
    INSERT INTO videos (title, src) VALUES ('Videos for Cats to Watch - 8 Hour Bird Bonanza', 'https://www.youtube.com/watch?v=xbs7FT7dXYc');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'The Complete London 2012 Opening Ceremony | London 2012 Olympic Games' AND src = 'https://www.youtube.com/watch?v=4As0e4de-rI') THEN
    INSERT INTO videos (title, src) VALUES ('The Complete London 2012 Opening Ceremony | London 2012 Olympic Games', 'https://www.youtube.com/watch?v=4As0e4de-rI');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Learn Unity - Beginners Game Development Course' AND src = 'https://www.youtube.com/watch?v=gB1F9G0JXOo') THEN
    INSERT INTO videos (title, src) VALUES ('Learn Unity - Beginners Game Development Course', 'https://www.youtube.com/watch?v=gB1F9G0JXOo');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Cracking Enigma in 2021 - Computerphile' AND src = 'https://www.youtube.com/watch?v=RzWB5jL5RX0') THEN
    INSERT INTO videos (title, src) VALUES ('Cracking Enigma in 2021 - Computerphile', 'https://www.youtube.com/watch?v=RzWB5jL5RX0');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Coding Adventure: Chess AI' AND src = 'https://www.youtube.com/watch?v=U4ogK0MIzqk') THEN
    INSERT INTO videos (title, src) VALUES ('Coding Adventure: Chess AI', 'https://www.youtube.com/watch?v=U4ogK0MIzqk');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Coding Adventure: Ant and Slime Simulations' AND src = 'https://www.youtube.com/watch?v=X-iSQQgOd1A') THEN
    INSERT INTO videos (title, src) VALUES ('Coding Adventure: Ant and Slime Simulations', 'https://www.youtube.com/watch?v=X-iSQQgOd1A');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM videos WHERE title = 'Why the Tour de France is so brutal' AND src = 'https://www.youtube.com/watch?v=ZacOS8NBK6U') THEN
    INSERT INTO videos (title, src) VALUES ('Why the Tour de France is so brutal', 'https://www.youtube.com/watch?v=ZacOS8NBK6U');
  END IF;
END
\$do\$;
EOF
