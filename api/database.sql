DROP TABLE IF EXISTS Task;

CREATE TABLE Task(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL, 
    description VARCHAR(200) NOT NULL,
    price FLOAT NOT NULL,
    isAvailable BOOLEAN NOT NULL,
    user VARCHAR(200) NOT NULL,
    tel VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS Task_User;

CREATE TABLE Task_User(
    id INT PRIMARY KEY NOT NULL,
    taskId INT NOT NULL,
    user VARCHAR(200) NOT NULL,
    isAchieved BOOLEAN NOT NULL,
    FOREIGN KEY (taskId) REFERENCES Task(id)
);
