COPY players FROM '/Users/christopherpeterson/src/fantasySoccer/fantasyWithExpress/migrations/playerInfo.csv' DELIMITER ',' CSV HEADER ENCODING 'windows-1251';

COPY performances FROM '/Users/christopherpeterson/src/fantasySoccer/fantasyWithExpress/migrations/weeklyData.csv' DELIMITER ',' CSV HEADER ENCODING 'windows-1251';
