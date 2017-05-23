# US-Presidential-Election-Analysis-2016 using Hadoop Technologies

Following are the steps taken in our Project -  Twitter Data.

A) Data Collection.
	Run the file twitter.js for gathering the data. It will return JSON data which will be appended to the file (File name and directory is configurable parameter inside the code).
	For running this script, Node JS framework must be set up and dependencies for twitter should be added.(install Twitter using npm).

B) ETL and Analytics :-

Following is the code for Loading the Twitter Data into Hive.

1) Dependencies Addition :-
Download JSON SerDe file and add dependencies using Maven (or equivalent deendency tool)
add jar /home/cloudera/Downloads/json-serde-1.3.6-jar-with-dependencies.jar;

2) Execute the commands in the sequnce as it appears in TwitterHive File.
	(We have used Hive in interactive shell. TwitterHive File contains all the queries needed for complete execution of the project and also the One Liner usage/purpose of that query)

C) Pig :-
	GSP and Unemployment are smaller datasets. The Pig Scripts are executed in order as they appear in files.


D) Directory Structure :-
 Location of Tweets JSON Files : /user/cloudera/project
 Location of President Candidate Details File : /user/cloudera/President
 Location for US Time Zones File : /user/cloudera/TimeZone
 Location for sentimen dictionary of Hortonworks : /user/cloudera/dictionary
 Location for TimeZones to country dictionary of Hortonworks : /user/cloudera/TimeZoneMap
