CREATE TABLE after_cut_1 (
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

CREATE TABLE after_cut_2 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

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

  CREATE TABLE conditionmc (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME WITHOUT TIME ZONE NOT NULL,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO conditionmc (date, time, item)
VALUES ('2023-07-08', '11:02:00', 'After cut air blow 1'),
('2023-07-08', '10:47:00', 'Twist cut air blow 1'),
('2023-07-08', '10:22:00', 'After cut air blow 2'),
('2023-07-08', '23:59:00', 'Twist cut air blow 2'),
('2023-07-08', '21:15:00', 'Tension pressure'),
('2023-07-08', '08:39:00', 'Tension adjust press');


CREATE TABLE conditionfin (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME WITHOUT TIME ZONE NOT NULL,
  item TEXT NOT NULL,
  ots DOUBLE PRECISION NOT NULL,
  mcs DOUBLE PRECISION NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO conditionfin (date, time, item, ots, mcs)
VALUES ('2023-07-08', '11:02', 'TG222310-8750', 5.02, 5.12),
('2023-07-08', '11:02', 'TG233310-1880', 5.02, 5.12),
('2023-07-08', '11:02', 'TG222310-9320', 5.02, 5.12),
('2023-07-08', '11:02', 'TG222310-9350', 5.02, 5.12),
('2023-07-08', '11:02', 'TG222310-9650', 5.02, 5.12),
('2023-07-08', '11:02', 'TG222310-9710', 5.02, 5.12),
('2023-07-08', '11:02', 'TG222310-9110', 5.02, 5.12),
('2023-07-08', '11:02', 'TG233310-9730', 5.02, 5.12),
('2023-07-08', '11:02', 'TG222310-9970', 5.02, 5.12),
('2023-07-08', '11:02', 'TG233310-0090', 5.02, 5.12);

CREATE TABLE fin_linecompo (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO fin_linecompo (itemname, item, time)
VALUES('TG222310-8750', 0.26, '11.01'),
  ('TG222310-8750', 0.24, '11.02'),
  ('TG222310-8750', 0.22, '11.03'),
  ('TG222310-8750', 0.20, '11.04'),
  ('TG222310-8750', 0.20, '11.05'),
  ('TG222310-8750', 0.20, '11.06'),
  ('TG222310-8750', 0.20, '11.07'),
  ('TG222310-8750', 0.20, '11.08'),
  ('TG222310-8750', 0.20, '11.09'),
  ('TG222310-8750', 0.20, '11.10'),
  ('TG222310-8750', 0.26, '11.01'),
  ('TG233310-1880', 0.24, '11.02'),
  ('TG233310-1880', 0.22, '11.03'),
  ('TG233310-1880', 0.20, '11.04'),
  ('TG233310-1880', 0.20, '11.05'),
  ('TG233310-1880', 0.20, '11.06'),
  ('TG233310-1880', 0.20, '11.07'),
  ('TG233310-1880', 0.20, '11.08'),
  ('TG233310-1880', 0.20, '11.09'),
  ('TG233310-1880', 0.20, '11.10'),
  ('TG222310-9320', 0.26, '11.01'),
  ('TG222310-9320', 0.24, '11.02'),
  ('TG222310-9320', 0.22, '11.03'),
  ('TG222310-9320', 0.20, '11.04'),
  ('TG222310-9320', 0.20, '11.05'),
  ('TG222310-9320', 0.20, '11.06'),
  ('TG222310-9320', 0.20, '11.07'),
  ('TG222310-9320', 0.20, '11.08'),
  ('TG222310-9320', 0.20, '11.09'),
  ('TG222310-9320', 0.20, '11.10'),
  ('TG222310-9350', 0.26, '11.01'),
  ('TG222310-9350', 0.24, '11.02'),
  ('TG222310-9350', 0.22, '11.03'),
  ('TG222310-9350', 0.20, '11.04'),
  ('TG222310-9350', 0.20, '11.05'),
  ('TG222310-9350', 0.20, '11.06'),
  ('TG222310-9350', 0.20, '11.07'),
  ('TG222310-9350', 0.20, '11.08'),
  ('TG222310-9350', 0.20, '11.09'),
  ('TG222310-9350', 0.20, '11.10'),
  ('TG222310-9650', 0.26, '11.01'),
  ('TG222310-9650', 0.24, '11.02'),
  ('TG222310-9650', 0.22, '11.03'),
  ('TG222310-9650', 0.20, '11.04'),
  ('TG222310-9650', 0.20, '11.05'),
  ('TG222310-9650', 0.20, '11.06'),
  ('TG222310-9650', 0.20, '11.07'),
  ('TG222310-9650', 0.20, '11.08'),
  ('TG222310-9650', 0.20, '11.09'),
  ('TG222310-9650', 0.20, '11.10'),
  ('TG222310-9710', 0.26, '11.01'),
  ('TG222310-9710', 0.24, '11.02'),
  ('TG222310-9710', 0.22, '11.03'),
  ('TG222310-9710', 0.20, '11.04'),
  ('TG222310-9710', 0.20, '11.05'),
  ('TG222310-9710', 0.20, '11.06'),
  ('TG222310-9710', 0.20, '11.07'),
  ('TG222310-9710', 0.20, '11.08'),
  ('TG222310-9710', 0.20, '11.09'),
  ('TG222310-9710', 0.20, '11.10'),
  ('TG222310-9710', 0.26, '11.01'),
  ('TG222310-9710', 0.24, '11.02'),
  ('TG222310-9710', 0.22, '11.03'),
  ('TG222310-9710', 0.20, '11.04'),
  ('TG222310-9710', 0.20, '11.05'),
  ('TG222310-9710', 0.20, '11.06'),
  ('TG222310-9710', 0.20, '11.07'),
  ('TG222310-9710', 0.20, '11.08'),
  ('TG222310-9710', 0.20, '11.09'),
  ('TG222310-9710', 0.20, '11.10'),
  ('TG222310-9110', 0.26, '11.01'),
  ('TG222310-9110', 0.24, '11.02'),
  ('TG222310-9110', 0.22, '11.03'),
  ('TG222310-9110', 0.20, '11.04'),
  ('TG222310-9110', 0.20, '11.05'),
  ('TG222310-9110', 0.20, '11.06'),
  ('TG222310-9110', 0.20, '11.07'),
  ('TG222310-9110', 0.20, '11.08'),
  ('TG222310-9110', 0.20, '11.09'),
  ('TG222310-9110', 0.20, '11.10'),
  ('TG233310-9730', 0.26, '11.01'),
  ('TG233310-9730', 0.24, '11.02'),
  ('TG233310-9730', 0.22, '11.03'),
  ('TG233310-9730', 0.20, '11.04'),
  ('TG233310-9730', 0.20, '11.05'),
  ('TG233310-9730', 0.20, '11.06'),
  ('TG233310-9730', 0.20, '11.07'),
  ('TG233310-9730', 0.20, '11.08'),
  ('TG233310-9730', 0.20, '11.09'),
  ('TG233310-9730', 0.20, '11.10'),
  ('TG222310-9970', 0.26, '11.01'),
  ('TG222310-9970', 0.24, '11.02'),
  ('TG222310-9970', 0.22, '11.03'),
  ('TG222310-9970', 0.20, '11.04'),
  ('TG222310-9970', 0.20, '11.05'),
  ('TG222310-9970', 0.20, '11.06'),
  ('TG222310-9970', 0.20, '11.07'),
  ('TG222310-9970', 0.20, '11.08'),
  ('TG222310-9970', 0.20, '11.09'),
  ('TG222310-9970', 0.20, '11.10'),
  ('TG233310-0090', 0.26, '11.01'),
  ('TG233310-0090', 0.24, '11.02'),
  ('TG233310-0090', 0.22, '11.03'),
  ('TG233310-0090', 0.20, '11.04'),
  ('TG233310-0090', 0.20, '11.05'),
  ('TG233310-0090', 0.20, '11.06'),
  ('TG233310-0090', 0.20, '11.07'),
  ('TG233310-0090', 0.20, '11.08'),
  ('TG233310-0090', 0.20, '11.09'),
  ('TG233310-0090', 0.20, '11.10');

CREATE TABLE gaugeset (
  id SERIAL PRIMARY KEY,
  itemname TEXT,
  rang FLOAT[],
  color TEXT,
  created_at TIMESTAMP DEFAULT now()
);

INSERT INTO gaugeset (itemname, rang, color, created_at)
VALUES
  ('After cut air blow 1', ARRAY[0,0.5], '#ffc000', NOW()),
  ('After cut air blow 2', ARRAY[0,1], '#93ff93', NOW()),
  ('Twist cut air blow 1', ARRAY[0,0.5], '#ffc000', NOW()),
  ('Twist cut air blow 2', ARRAY[0,1], '#7575d1', NOW()),
  ('Tension pressure', ARRAY[0,0.5], '#00b0ef', NOW()),
  ('Tension adjust press', ARRAY[0,1], '#ff66cc', NOW());

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

CREATE TABLE history_result (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  item TEXT NOT NULL,
  status TEXT NOT NULL
);

INSERT INTO history_result (date, time, item, status) VALUES
('2023-07-08', '11:02', 'TG222310-8750', 'NG'),
('2023-06-12', '10:47', 'TG233310-1880', 'NG'),
('2023-06-08', '10:22', 'TG222310-9320', 'NG');

CREATE TABLE history_problems (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  item TEXT NOT NULL,
  min TEXT NOT NULL,
  max TEXT NOT NULL,
  value TEXT NOT NULL,
  status TEXT NOT NULL
);

INSERT INTO history_problems (date, time, item, min, max, value, status) VALUES
('2023-07-08', '11:02', 'After cut air blow 1', '0.22', '0.25', '0.27', 'NG'),
('2023-06-12', '10:47', 'After cut air blow 2', '0.22', '0.25', '0.26', 'NG'),
('2023-06-12', '10:47', 'Twist chut air blow 1', '0.22', '0.25', '0.18', 'NG'),
('2023-06-12', '10:47', 'After cut air blow 1', '0.22', '0.25', '0.20', 'NG'),
('2023-06-12', '10:47', 'After cut air blow 1', '0.22', '0.25', '0.29', 'NG'),
('2023-06-12', '10:47', 'After cut air blow 2', '0.22', '0.25', '0.52', 'NG'),
('2023-06-12', '10:47', 'After cut air blow 2', '0.22', '0.25', '0.21', 'NG'),
('2023-06-12', '10:47', 'After cut air blow 2', '0.22', '0.25', '0.19', 'NG'),
('2023-06-12', '10:47', 'Twist chut air blow 2', '0.22', '0.25', '0.20', 'NG'),
('2023-06-08', '10:22', 'Twist chut air blow 2', '0.20', '0.50', '0.19', 'NG');


CREATE TABLE weights (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    items INTEGER[] NOT NULL
);

INSERT INTO weights (date, time, item_name, items)
VALUES
  ('2023-08-07', '11:15:00', 'Weight A', ARRAY[400]),
  ('2023-08-07', '11:15:00', 'Weight B', ARRAY[1100]);


  CREATE TABLE needleValue (
  id SERIAL PRIMARY KEY,
  itemname TEXT,
  needle FLOAT,
  created_at TIMESTAMP DEFAULT now()
);
INSERT INTO needleValue (itemname, needle, created_at)
VALUES
  ('After cut air blow 1', 0.1, NOW()),
  ('After cut air blow 2', 0.1, NOW()),
  ('Twist cut air blow 1', 0.1, NOW()),
  ('Twist cut air blow 2', 0.1,  NOW()),
  ('Tension pressure', 0.1, NOW()),
  ('Tension adjust press', 0.1, NOW());


CREATE TABLE twist_cut_1 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

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

CREATE TABLE twist_cut_2 (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

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

CREATE TABLE tension_p (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

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

CREATE TABLE tension_ap (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

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

CREATE TABLE Threshold (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  min DOUBLE PRECISION NOT NULL,
  max DOUBLE PRECISION NOT NULL,
  color VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO Threshold (item, min, max, color)
VALUES 
 ('After cut air blow 1', 0.18, 0.28,'#ffc000'),
 ('After cut air blow 2', 0.18, 0.28,'#93ff93'),
 ('Twist cut air blow 1', 0.18, 0.28,'#7575d1'),
 ('Twist cut air blow 2', 0.18, 0.28,'#00b0ef'),
 ('Tension pressure', 0.18, 0.28,'#ff66cc'),
 ('Tension adjust press', 0.18, 0.28,'#ffffcc'),
 ('TG222310-8750', 0.18, 0.28, '#ffc000'),
 ('TG233310-1880', 0.18, 0.28, '#93ff93'),
 ('TG222310-9320', 0.18, 0.28, '#7575d1'),
 ('TG222310-9350', 0.18, 0.28, '#00b0ef'),
 ('TG222310-9650', 0.18, 0.28, '#ff66cc'),
 ('TG222310-9710', 0.18, 0.28, '#ffffcc'),
 ('TG222310-9110', 0.18, 0.28, '#00b0ef'),
 ('TG233310-9730', 0.18, 0.28, '#99d266'),
 ('TG222310-9970', 0.18, 0.28, '#969696'),
 ('TG233310-0090', 0.18, 0.28, '#ffffff');




