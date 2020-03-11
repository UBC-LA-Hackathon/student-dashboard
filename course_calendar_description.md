
# Course Calendar Data Description


| Column | Description | Type | Note | 
| ---------|----------|--------- |---------|
 SESSION_YEAR | This is the session year (i.e. 2010) and session (i.e W) that the course is offered in. | string | A session year runs from April to the following May (i.e. 2010 is April 2010 to May 2011). The session can either be "S" (summer) or "W" (winter). The summer session is typically April to May of the same year, and the winter session is typically September to  The SESSION_YEAR and TERM combined provide more detailed information about when a course is offered. 
 COURSE_TITLE | The offered course title. | string | The course title is often shown as an abbreviation. 
 COURSE_DESCRIPTION | A description of the course. | string | Sometimes includes permission or other course requirements.
 FACULTY | The faculty that offers the course | string | *what is FACULTY = REGI (for EXCH)
 SUBJECT_CODE | The course subject code. | string | A combination of SUBJECT_CODE and  COURSE_NUMBER tells you which course this is. Can be further combined with the SECTION_NUMBER for individual course section. 
 SECTION_TYPE | The course section type | string | The kind of section being offered.
 CREDITS | The number of credits obtained by successful completion of the course | number |
 PRE_REQUISITE_DESCRIPTIONS |  A description of requirements that must be completed before taking the course. | string | This field is not always consistently formatted.
 CO_PRE_REQUISITE_DESCRIPTIONS | A description of requirements that must be completed while taking the course. | string | This field is not always consistently formatted.
 TERM | The term of the course being offered | | The term will have different meanings for W and S courses. 
 DAYSMET | The days of the week this course is offered. | string | **M**onday, **T**uesday, **W**ednesday, Thu**R**sday, **F**riday, **S**aturday, S**U**nday
 START_TIME | The start time of the course offering. | time (12hr, AM/PM)|
 END_TIME | The end time of the course offering. | time (12hr, AM/PM)|
 CAMPUS | The campus that offers the course. | string | UBC (UBC Vancouver Campus) or UBCO (UBC Okanagan Campus)
 BUILDING | The building code where the course is held. | string 
 ROOM_NUMBER | The room number for the building where the course is held. | string
 INSTRUCTORS | The instructors responsible for teaching the course | list (seperated by ';') | Formatted as LAST, FIRST
 TOTAL_SEATS_REMAINING | The sum of the GENERAL_SEATS_REMAINING and RESRICTED_SEATS_REMAINING. How many seats are unfilled from the total available. | integer | 
 CURRENTLY_REGISTERED | How many seats are filled. | integer
 GENERAL_SEATS_REMAINING | How many unrestricted/general seats are unfilled. | integer
 RESTRICTED_SEATS_REMAINING | How many restricted seats are unfilled. | integer | A restricted seat would have a program or other requirement for those taking the course.
