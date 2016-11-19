DROP DATABASE IF EXISTS futbolexpress;
CREATE DATABASE futbolexpress;

\c futbolexpress

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  team VARCHAR(100),
  inj BOOLEAN,
  pos_1 VARCHAR(3),
  pos_2 VARCHAR(3),
  pos_3 VARCHAR(3),
  opp VARCHAR(4)
);

CREATE TABLE leagues (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  l_id INT REFERENCES leagues(id)
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  u_id INT REFERENCES users(id),
  l_id INT REFERENCES leagues(id),
  name VARCHAR(100),
  gk_id INT REFERENCES players(id),
  fbl_id INT REFERENCES players(id),
  fbr_id INT REFERENCES players(id),
  cbl_id INT REFERENCES players(id),
  cbr_id INT REFERENCES players(id),
  wl_id INT REFERENCES players(id),
  wr_id INT REFERENCES players(id),
  cml_id INT REFERENCES players(id),
  cmr_id INT REFERENCES players(id),
  sl_id INT REFERENCES players(id),
  sr_id INT REFERENCES players(id),
  bn1_id INT REFERENCES players(id),
  bn2_id INT REFERENCES players(id),
  bn3_id INT REFERENCES players(id),
  bn4_id INT REFERENCES players(id),
  bn5_id INT REFERENCES players(id),
  bn6_id INT REFERENCES players(id),
  bn7_id INT REFERENCES players(id),
  in1_id INT REFERENCES players(id),
  in2_id INT REFERENCES players(id),
  in3_id INT REFERENCES players(id)
);

CREATE TABLE performances (
  id SERIAL PRIMARY KEY,
  p_id INT REFERENCES players(id),
  week SMALLINT,
  mins SMALLINT,
  start BOOLEAN,
  pos VARCHAR(4),
  n_goal SMALLINT,
  p_goal SMALLINT,
  p_miss SMALLINT,
  sht_on SMALLINT,
  sht_off SMALLINT,
  sht_post SMALLINT,
  fld SMALLINT,
  fld_p SMALLINT,
  off SMALLINT,
  ast SMALLINT,
  key SMALLINT,
  own SMALLINT,
  ylw SMALLINT,
  ylw2 SMALLINT,
  red SMALLINT,
  fl SMALLINT,
  fl_p SMALLINT,
  tck SMALLINT,
  intr SMALLINT,
  head SMALLINT,
  blk SMALLINT,
  clr SMALLINT,
  n_con SMALLINT,
  p_con SMALLINT,
  o_con SMALLINT,
  p_sav SMALLINT,
  c_sav SMALLINT,
  pn_sav SMALLINT
);

CREATE TABLE point_vals (
  assists NUMERIC,
  clearances NUMERIC,
  foulsConceded NUMERIC,
  foulsDrawn NUMERIC,
  headersWon NUMERIC,
  interceptions NUMERIC,
  keyPasses NUMERIC,
  normalGoals NUMERIC,
  normalGoalsConceded NUMERIC,
  offsides NUMERIC,
  ownGoals NUMERIC,
  ownGoalsConceded NUMERIC,
  penaltiesConceded NUMERIC,
  penaltiesDrawn NUMERIC,
  penaltiesSaved NUMERIC,
  penaltyGoals NUMERIC,
  penaltyGoalsConceded NUMERIC,
  penaltyMisses NUMERIC,
  savesCaught NUMERIC,
  savesParried NUMERIC,
  secondYellows NUMERIC,
  shotsBlocked NUMERIC,
  shotsOffPost NUMERIC,
  shotsOffTarget NUMERIC,
  shotsOnTarget NUMERIC,
  straightReds NUMERIC,
  tackles NUMERIC,
  yellowCards NUMERIC
);

INSERT INTO leagues(id, name) VALUES (1, 'the champions league');

INSERT INTO users(name, email, password, l_id) VALUES ('Phred', 'phred@gmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Jones', 'jones@gmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Guy', 'guy@yahoo.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Nina', 'nina@hotmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Ashley', 'ashley@generalassemb.ly', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Meaghan', 'meg@yahoo.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Richard', 'rick@gmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Melissa', 'melissa@nyu.edu', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Nathan', 'nate@gmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Kaylee', 'kaylee@greenpeace.org', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Jaydeep', 'jay@hotmail.com', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);
INSERT INTO users(name, email, password, l_id) VALUES ('Messi', 'lionel@barca.net', '$2a$10$bzJ1syjDtb9HWW6o00DHbOGDshdp244Kj6dhS7Ex3SNfMEDzB4fri', 1);

INSERT INTO point_vals(assists, clearances, foulsConceded, foulsDrawn, headersWon, interceptions, keyPasses, normalGoals, normalGoalsConceded, offsides, ownGoals, ownGoalsConceded, penaltiesConceded, penaltiesDrawn, penaltiesSaved, penaltyGoals, penaltyGoalsConceded, penaltyMisses, savesCaught, savesParried, secondYellows, shotsBlocked, shotsOffPost, shotsOffTarget, shotsOnTarget, straightReds, tackles, yellowCards) VALUES (4, 0.5, -0.5, 0.5, 0.5, 0.5, 1, 7, -4, -1, -5, -2.5, -4.5, 4, 7, 3, -2.5, -4.5, 2, 1, -4, 1, 2, 0.5, 1, -6, 1, -2);

COPY players FROM '/Users/christopherpeterson/src/fantasySoccer/fantasyWithExpress/migrations/playerInfo.csv' DELIMITER ',' CSV HEADER ENCODING 'windows-1251';

COPY performances FROM '/Users/christopherpeterson/src/fantasySoccer/fantasyWithExpress/migrations/weeklyData.csv' DELIMITER ',' CSV HEADER ENCODING 'windows-1251';

COPY teams FROM '/Users/christopherpeterson/src/fantasySoccer/fantasyWithExpress/migrations/teamSeed.csv' DELIMITER ',' CSV HEADER ENCODING 'windows-1251';
