after_cut_1
after_cut_2
twist_cut_1
twist_cut_2
tension_p
tension_ap
<Line url="http://localhost:3000/api/after-cut-1" />
<Line url="http://localhost:3000/api/after_cut_2" />
<Line url="http://localhost:3000/api/twist_cut_1" />
<Line url="http://localhost:3000/api/twist_cut_2" />
<Line url="http://localhost:3000/api/tension_p" />
<Line url="http://localhost:3000/api/tension_ap" />
After cut air blow 1
Twist cut air blow 1
After cut air blow 2
Twist cut air blow 2
Tension pressure
Tension adjust press

CREATE TABLE history (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  item TEXT NOT NULL,
  status TEXT NOT NULL
);

INSERT INTO history (date, time, item, status) VALUES
('2023-07-08', '11:02', 'After cut air blow 1', 'NG'),
('2023-07-08', '10:47', 'After cut air blow 2', 'NG'),
('2023-07-08', '10:22', 'Twist cut air blow 1', 'NG'),
('2023-07-07', '23:59', 'After cut air blow 1', 'NG'),
('2023-07-07', '21:15', 'Twist cut air blow 1', 'NG'),
('2023-07-06', '08:39', 'Twist cut air blow 1', 'NG'),
('2023-07-05', '15:11', 'Twist cut air blow 1', 'NG');


CREATE TABLE after_cut_1 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE after_cut_2 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE twist_cut_1 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE twist_cut_2 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tension_p (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tension_ap (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO after_cut_1 (itemname, item, time)
VALUES 
  ('After cut air blow 1', 0.26, '11.01'),
  ('After cut air blow 1', 0.24, '11.02'),
  ('After cut air blow 1', 0.22, '11.03'),
  ('After cut air blow 1', 0.20, '11.04'),
  ('After cut air blow 1', 0.20, '11.05'),
  ('After cut air blow 1', 0.20, '11.06'),
  ('After cut air blow 1', 0.20, '11.07'),
  ('After cut air blow 1', 0.20, '11.08'),
  ('After cut air blow 1', 0.20, '11.09'),
  ('After cut air blow 1', 0.20, '11.10');

  INSERT INTO after_cut_2 (itemname, item, time)
VALUES 
  ('After cut air blow 2', 0.26, '11.01'),
  ('After cut air blow 2', 0.24, '11.02'),
  ('After cut air blow 2', 0.22, '11.03'),
  ('After cut air blow 2', 0.20, '11.04'),
  ('After cut air blow 2', 0.20, '11.05'),
  ('After cut air blow 2', 0.20, '11.06'),
  ('After cut air blow 2', 0.20, '11.07'),
  ('After cut air blow 2', 0.20, '11.08'),
  ('After cut air blow 2', 0.20, '11.09'),
  ('After cut air blow 2', 0.20, '11.10');

INSERT INTO twist_cut_1 (itemname, item, time)
VALUES 
  ('Twist cut air blow 1', 0.26, '11.01'),
  ('Twist cut air blow 1', 0.24, '11.02'),
  ('Twist cut air blow 1', 0.22, '11.03'),
  ('Twist cut air blow 1', 0.20, '11.04'),
  ('Twist cut air blow 1', 0.20, '11.05'),
  ('Twist cut air blow 1', 0.20, '11.06'),
  ('Twist cut air blow 1', 0.20, '11.07'),
  ('Twist cut air blow 1', 0.20, '11.08'),
  ('Twist cut air blow 1', 0.20, '11.09'),
  ('Twist cut air blow 1', 0.20, '11.10');

INSERT INTO twist_cut_2 (itemname, item, time)
VALUES 
  ('Twist cut air blow 2', 0.26, '11.01'),
  ('Twist cut air blow 2', 0.24, '11.02'),
  ('Twist cut air blow 2', 0.22, '11.03'),
  ('Twist cut air blow 2', 0.20, '11.04'),
  ('Twist cut air blow 2', 0.20, '11.05'),
  ('Twist cut air blow 2', 0.20, '11.06'),
  ('Twist cut air blow 2', 0.20, '11.07'),
  ('Twist cut air blow 2', 0.20, '11.08'),
  ('Twist cut air blow 2', 0.20, '11.09'),
  ('Twist cut air blow 2', 0.20, '11.10');


INSERT INTO tension_p (itemname, item, time)
VALUES 
  ('Tension press', 0.26, '11.01'),
  ('Tension press', 0.24, '11.02'),
  ('Tension press', 0.22, '11.03'),
  ('Tension press', 0.20, '11.04'),
  ('Tension press', 0.20, '11.05'),
  ('Tension press', 0.20, '11.06'),
  ('Tension press', 0.20, '11.07'),
  ('Tension press', 0.20, '11.08'),
  ('Tension press', 0.20, '11.09'),
  ('Tension press', 0.20, '11.10');

INSERT INTO tension_ap (itemname, item, time)
VALUES 
  ('Tension adjust press', 0.26, '11.01'),
  ('Tension adjust press', 0.24, '11.02'),
  ('Tension adjust press', 0.22, '11.03'),
  ('Tension adjust press', 0.20, '11.04'),
  ('Tension adjust press', 0.20, '11.05'),
  ('Tension adjust press', 0.20, '11.06'),
  ('Tension adjust press', 0.20, '11.07'),
  ('Tension adjust press', 0.20, '11.08'),
  ('Tension adjust press', 0.20, '11.09'),
  ('Tension adjust press', 0.20, '11.10');
