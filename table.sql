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

CREATE TABLE temp (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO temp (item, created_at) VALUES
('After Burner', '2025-04-23T07:59:42.430Z'),
('Degreasing zone 1', '2025-04-23T07:59:42.430Z'),
('Degreasing zone 2', '2025-04-23T07:59:42.430Z'),
('Degreasing zone 3', '2025-04-23T07:59:42.430Z'),
('Debinderr zone 1', '2025-04-23T07:59:42.430Z'),
('Debinderr zone 2', '2025-04-23T07:59:42.430Z'),
('Debinderr zone 3', '2025-04-23T07:59:42.430Z'),
('Front Chamber', '2025-04-23T07:59:42.430Z'),
('Heating Right ATM Zone 1', '2025-04-23T07:59:42.430Z'),
('Heating Left ATM Zone 1', '2025-04-23T07:59:42.430Z'),
('Heating Right ATM Zone 2', '2025-04-23T07:59:42.430Z'),
('Heating Left ATM Zone 2', '2025-04-23T07:59:42.430Z'),
('Heating Right ATM Zone 3', '2025-04-23T07:59:42.430Z'),
('Heating Left ATM Zone 3', '2025-04-23T07:59:42.430Z'),
('Heating Right ATM Zone 4', '2025-04-23T07:59:42.430Z'),
('Heating Left ATM Zone 4', '2025-04-23T07:59:42.430Z'),
('Keeping Heat chamber', '2025-04-23T07:59:42.430Z'),
('Exit Chamber', '2025-04-23T07:59:42.430Z'),
('Conveyer Speed (mm/min)', '2025-04-23T07:59:42.430Z');

CREATE TABLE temp_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO temp_line (itemname, item, time)
VALUES 
  ('After Burner', 0.26, '11.01'),
  ('Degreasing Zone 1', 0.26, '11.01'),
  ('Degreasing Zone 2', 0.26, '11.01'),
  ('Degreasing Zone 3', 0.26, '11.01'),
  ('Debinder Zone 1', 0.26, '11.01'),
  ('Debinder Zone 2', 0.26, '11.01'),
  ('Debinder Zone 3', 0.26, '11.01'),
  ('Front Chamber', 0.26, '11.01'),
  ('Heating Right ATM Zone 1', 0.26, '11.01'),
  ('Heating Right ATM Zone 2', 0.26, '11.01'),
  ('Heating Right ATM Zone 3', 0.26, '11.01'),
  ('Heating Right ATM Zone 4', 0.26, '11.01'),
  ('Heating Left ATM Zone 1', 0.26, '11.01'),
  ('Heating Left ATM Zone 2', 0.26, '11.01'),
  ('Heating Left ATM Zone 3', 0.26, '11.01'),
  ('Heating Left ATM Zone 4', 0.26, '11.01'),
  ('Keeping Heat chamber', 0.26, '11.01'),
  ('Exit Chamber', 0.26, '11.01'),
  ('Conveyer Speed (mm/min)', 0.26, '11.01');

  CREATE TABLE rc_fan_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO rc_fan_line (itemname, item, time)
VALUES 
  ('Degreasing Zone 1', 0.26, '11.01'),
  ('Degreasing Zone 2', 0.26, '11.01'),
  ('Degreasing Zone 3', 0.26, '11.01'),
  ('Debinder Zone 1', 0.26, '11.01'),
  ('Debinder Zone 2', 0.26, '11.01'),
  ('Debinder Zone 3', 0.26, '11.01'),
  ('Heating zone 1', 0.26, '11.01'),
  ('Heating zone 2', 0.26, '11.01'),
  ('Heating zone 3', 0.26, '11.01'),
  ('Heating zone 4', 0.26, '11.01');


  CREATE TABLE ex_fan_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO ex_fan_line (itemname, item, time)
VALUES 
  ('Blast Cooling 1', 0.26, '11.01'),
  ('Blast Cooling 2', 0.26, '11.01'),
  ('Blast Cooling 3', 0.26, '11.01');

  CREATE TABLE bw_fan_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bw_fan_line (itemname, item, time)
VALUES 
  ('Blast Cooling Right Front 1', 0.26, '11.01'),
  ('Blast Cooling Right Rear 1', 0.26, '11.01'),
  ('Blast Cooling Left Front 1', 0.26, '11.01'),
  ('Blast Cooling Left Rear 1', 0.26, '11.01'),
  ('Blast Cooling Right Front 2', 0.26, '11.01'),
  ('Blast Cooling Right Rear 2', 0.26, '11.01'),
  ('Blast Cooling Left Front 2', 0.26, '11.01'),
  ('Blast Cooling Left Rear 2', 0.26, '11.01'),
  ('Blast Cooling Right Front 3', 0.26, '11.01'),
  ('Blast Cooling Right Rear 3', 0.26, '11.01'),
  ('Blast Cooling Left Front 3', 0.26, '11.01'),
  ('Blast Cooling Left Rear 3', 0.26, '11.01');



  CREATE TABLE nitrogen_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO nitrogen_line (itemname, item, time)
VALUES 
  ('Front Chamber (Entrance)', 0.26, '11.01'),
  ('Front Chamber (Exit)', 0.26, '11.01'),
  ('Heating zone 1,2', 0.26, '11.01'),
  ('Heating zone 3,4', 0.26, '11.01'),
  ('Keeping zone', 0.26, '11.01');

    CREATE TABLE o2_bf_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO o2_bf_line (itemname, item, time)
VALUES 
  ('Heating zone 1', 0.26, '11.01'),
  ('Heating zone 2', 0.26, '11.01'),
  ('Heating zone 3', 0.26, '11.01'),
  ('Heating zone 4', 0.26, '11.01'),
  ('Keeping zone', 0.26, '11.01'),
  ('Exit Zone', 0.26, '11.01');

      CREATE TABLE o2_af_line (
  id SERIAL PRIMARY KEY,
  itemname VARCHAR(255) NOT NULL,
  item FLOAT NOT NULL,
  time VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO o2_af_line (itemname, item, time)
VALUES 
  ('Heating zone 1', 0.26, '11.01'),
  ('Heating zone 3', 0.26, '11.01'),
  ('Keeping zone', 0.26, '11.01'),
  ('Exit Zone', 0.26, '11.01');

  CREATE TABLE bz_temp (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_temp (item)
VALUES ('After Burner'),
('Degreasing Zone 1'),
('Degreasing Zone 2'),
('Degreasing Zone 3'),
('Debinder Zone 1'),
('Debinder Zone 2'),
('Debinder Zone 3'),
('Front Chamber'),
('Heating Right ATM Zone 1'),
('Heating Left ATM Zone 1'),
('Heating Right ATM Zone 2'),
('Heating Left ATM Zone 2'),
('Heating Right ATM Zone 3'),
('Heating Left ATM Zone 3'),
('Heating Right ATM Zone 4'),
('Heating Left ATM Zone 4'),
('Keeping Heat chamber'),
('Exit Chamber'),
('Conveyer Speed (mm/min)');

  CREATE TABLE bz_rc_fan (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_rc_fan (item)
VALUES ('After Burner'),
('Degreasing Zone 1'),
('Degreasing Zone 2'),
('Degreasing Zone 3'),
('Debinder zone 1'),
('Debinder zone 2'),
('Debinder zone 3'),
('Heating zone 1'),
('Heating zone 2'),
('Heating zone 3'),
('Heating zone 4');

  CREATE TABLE bz_ex_fan (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_ex_fan (item)
VALUES
('Blast Cooling 1'),
('Blast Cooling 2'),
('Blast Cooling 3');


  CREATE TABLE bz_bw_fan (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_bw_fan (item)
VALUES 
('Blast Cooling Right Front 1'),
('Blast Cooling Left Front 1'),
('Blast Cooling Right Rear 1'),
('Blast Cooling Left Rear 1'),
('Blast Cooling Right Front 2'),
('Blast Cooling Left Front 2'),
('Blast Cooling Right Rear 2'),
('Blast Cooling Left Rear 2'),
('Blast Cooling Right Front 3'),
('Blast Cooling Left Front 3'),
('Blast Cooling Right Rear 3'),
('Blast Cooling Left Rear 3');

  CREATE TABLE bz_nitrogen (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_nitrogen (item)
VALUES 
('Front Chamber (Entrance)'),
('Front Chamber (Exit)'),
('Heating zone 1,2'),
('Heating Zone 3,4'),
('Keeping Zone');

  CREATE TABLE bz_o2_b (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_o2_b (item)
VALUES 
('Heating zone 1'),
('Heating zone 2'),
('Heating zone 3'),
('Heating zone 4'),
('Keeping Zone'),
('Exit Zone');

  CREATE TABLE bz_o2_a (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO bz_o2_a (item)
VALUES 
('Heating zone 1'),
('Heating zone 2'),
('Keeping Zone'),
('Exit Zone');

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
  ('Tension adjust press', ARRAY[0,1], '#ff66cc', NOW()),
   ('After Burner', ARRAY[0,0.5], '#ffc000', NOW()),
('Degreasing Zone 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Degreasing Zone 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Degreasing Zone 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Debinder Zone 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Debinder Zone 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Debinder Zone 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Right ATM Zone 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Left ATM Zone 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Right ATM Zone 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Left ATM Zone 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Right ATM Zone 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Left ATM Zone 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Right ATM Zone 4', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Left ATM Zone 4', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Right Front 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Right Front 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Right Front 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Right Rear 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Right Rear 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Right Rear 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Left Front 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Left Front 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Left Front 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Left Rear 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Left Rear 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Blast Cooling Left Rear 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Front Chamber', ARRAY[0,0.5], '#ffc000', NOW()),
('Front Chamber (Entrance)', ARRAY[0,0.5], '#ffc000', NOW()),
('Front Chamber (Exit)', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Zone 1,2', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating Zone 3,4', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating zone 1', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating zone 2', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating zone 3', ARRAY[0,0.5], '#ffc000', NOW()),
('Heating zone 4', ARRAY[0,0.5], '#ffc000', NOW()),
('Exit Zone', ARRAY[0,0.5], '#ffc000', NOW()),
('Keeping Zone', ARRAY[0,0.5], '#ffc000', NOW()),
('Keeping Heat chamber', ARRAY[0,0.5], '#ffc000', NOW()),
('Exit Chamber', ARRAY[0,0.5], '#ffc000', NOW()),
('Conveyer Speed (mm/min)', ARRAY[0,0.5], '#ffc000', NOW());

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
  ('Tension pressure', 0.26, '11.01'),
  ('Tension pressure', 0.24, '11.02'),
  ('Tension pressure', 0.22, '11.03'),
  ('Tension pressure', 0.20, '11.04'),
  ('Tension pressure', 0.20, '11.05'),
  ('Tension pressure', 0.20, '11.06'),
  ('Tension pressure', 0.20, '11.07'),
  ('Tension pressure', 0.20, '11.08'),
  ('Tension pressure', 0.20, '11.09'),
  ('Tension pressure', 0.20, '11.10');

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
 ('TG446610-4961', 0.18, 0.28, '#ff66cc'),
 ('TG447610-9201', 0.18, 0.28, '#ffffcc'),
 ('TG447610-9220', 0.18, 0.28, '#00b0ef'),
 ('TG446610-6090', 0.18, 0.28, '#99d266'),
 ('TG447610-6740', 0.18, 0.28, '#969696'),
 ('TG446620-2320', 0.18, 0.28, '#ffffff'),
  ('TG446620-4410', 0.18, 0.28, '#ffffff'),
('TG446610-1050', 0.18, 0.28, '#ffc000'),
 ('TG446610-8170', 0.18, 0.28, '#93ff93'),
 ('TG446620-0050', 0.18, 0.28, '#7575d1'),
 ('TG446610-6800', 0.18, 0.28, '#00b0ef'),
 ('TG446620-6840', 0.18, 0.28, '#ff66cc'),
 ('TG446620-2020', 0.18, 0.28, '#ffffcc'),
 ('TG447610-4850', 0.18, 0.28, '#00b0ef'),
 ('TG446610-6770', 0.18, 0.28, '#99d266'),
 ('TG446610-3930', 0.18, 0.28, '#969696'),
 ('TG446610-4450', 0.18, 0.28, '#ffffff'),
  ('TG446610-4630', 0.18, 0.28, '#ffffff'),
('TG446610-9880', 0.18, 0.28, '#ffc000'),
 ('TG446610-4000', 0.18, 0.28, '#93ff93'),
 ('TG447610-9650', 0.18, 0.28, '#7575d1'),
 ('TG447610-8601', 0.18, 0.28, '#00b0ef'),
 ('TG446620-0620', 0.18, 0.28, '#ff66cc'),
 ('TG446620-0600', 0.18, 0.28, '#ffffcc'),
 ('TG446620-6530', 0.18, 0.28, '#00b0ef'),
 ('TG446600-0582', 0.18, 0.28, '#99d266'),
 ('TG446610-6330', 0.18, 0.28, '#969696'),
 ('TG446620-7560', 0.18, 0.28, '#ffffff'),
  ('TG446600-7181', 0.18, 0.28, '#ffffff'),
('TG446620-1750', 0.18, 0.28, '#ffc000'),
 ('TG446620-7530', 0.18, 0.28, '#93ff93'),
 ('TG446620-0140', 0.18, 0.28, '#7575d1'),
 ('TG446620-3520', 0.18, 0.28, '#00b0ef'),
 ('TG446610-0751', 0.18, 0.28, '#ff66cc'),
 ('TG447610-4780', 0.18, 0.28, '#ffffcc'),
 ('TG446600-4311', 0.18, 0.28, '#00b0ef'),
 ('TG446610-4440', 0.18, 0.28, '#99d266'),
 ('TG446600-4431', 0.18, 0.28, '#969696'),
 ('TG447610-8610', 0.18, 0.28, '#ffffff'),
  ('TG446600-7511', 0.18, 0.28, '#ffffff'),
('TG447610-9250', 0.18, 0.28, '#ffc000'),
 ('TG447610-2941', 0.18, 0.28, '#93ff93'),
 ('TG447610-1881', 0.18, 0.28, '#7575d1'),
 ('TG446600-3832', 0.18, 0.28, '#00b0ef'),
 ('TG446610-6190', 0.18, 0.28, '#ff66cc'),
 ('TG447610-0791', 0.18, 0.28, '#ffffcc'),
 ('TG446600-3941', 0.18, 0.28, '#00b0ef'),
 ('TG446620-8940', 0.18, 0.28, '#99d266'),
 ('TG447610-8901', 0.18, 0.28, '#969696'),
 ('TG446620-1700', 0.18, 0.28, '#ffffff'),
  ('TG446600-3482', 0.18, 0.28, '#ffffff'),
 ('After Burner', 0.18, 0.28, '#ffffff'),
 ('Degreasing Zone 1', 0.18, 0.28, '#ffffff'),
('Degreasing Zone 2', 0.18, 0.28, '#ffffff'),
('Degreasing Zone 3', 0.18, 0.28, '#ffffff'),
('Debinder Zone 1', 0.18, 0.28, '#ffffff'),
('Debinder Zone 2', 0.18, 0.28, '#ffffff'),
('Debinder Zone 3', 0.18, 0.28, '#ffffff'),
('Heating Right ATM Zone 1', 0.18, 0.28, '#ffffff'),
('Heating Left ATM Zone 1', 0.18, 0.28, '#ffffff'),
('Heating Right ATM Zone 2', 0.18, 0.28, '#ffffff'),
('Heating Left ATM Zone 2', 0.18, 0.28, '#ffffff'),
('Heating Right ATM Zone 3', 0.18, 0.28, '#ffffff'),
('Heating Left ATM Zone 3', 0.18, 0.28, '#ffffff'),
('Heating Right ATM Zone 4', 0.18, 0.28, '#ffffff'),
('Heating Left ATM Zone 4', 0.18, 0.28, '#ffffff'),
('Blast Cooling 1', 0.18, 0.28, '#ffffff'),
('Blast Cooling 2', 0.18, 0.28, '#ffffff'),
('Blast Cooling 3', 0.18, 0.28, '#ffffff'),
('Blast Cooling Right Front 1', 0.18, 0.28, '#ffffff'),
('Blast Cooling Right Front 2', 0.18, 0.28, '#ffffff'),
('Blast Cooling Right Front 3', 0.18, 0.28, '#ffffff'),
('Blast Cooling Right Rear 1', 0.18, 0.28, '#ffffff'),
('Blast Cooling Right Rear 2', 0.18, 0.28, '#ffffff'),
('Blast Cooling Right Rear 3', 0.18, 0.28, '#ffffff'),
('Blast Cooling Left Front 1', 0.18, 0.28, '#ffffff'),
('Blast Cooling Left Front 2', 0.18, 0.28, '#ffffff'),
('Blast Cooling Left Front 3', 0.18, 0.28, '#ffffff'),
('Blast Cooling Left Rear 1', 0.18, 0.28, '#ffffff'),
('Blast Cooling Left Rear 2', 0.18, 0.28, '#ffffff'),
('Blast Cooling Left Rear 3', 0.18, 0.28, '#ffffff'),
('Front Chamber', 0.18, 0.28, '#ffffff'),
('Front Chamber (Entrance)', 0.18, 0.28, '#ffffff'),
('Front Chamber (Exit)', 0.18, 0.28, '#ffffff'),
('Heating Zone 1,2', 0.18, 0.28, '#ffffff'),
('Heating Zone 3,4', 0.18, 0.28, '#ffffff'),
('Heating zone 1', 0.18, 0.28, '#ffffff'),
('Heating zone 2', 0.18, 0.28, '#ffffff'),
('Heating zone 3', 0.18, 0.28, '#ffffff'),
('Heating zone 4', 0.18, 0.28, '#ffffff'),
('Exit Zone', 0.18, 0.28, '#ffffff'),
('Keeping Zone', 0.18, 0.28, '#ffffff'),
('Keeping Heat chamber', 0.18, 0.28, '#ffffff'),
('Exit Chamber', 0.18, 0.28, '#ffffff'),
('Conveyer Speed (mm/min)', 0.18, 0.28, '#ffffff');





