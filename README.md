# Lite DateFormat
## A light weight library to format Date.

This library can be use to convert any date to specific format and also takes care of issue to date being set incorrect when user pass any date as string to new Date() in javascript/nodejs

## Features

- Returns the date object 
- Support for almost any formatting.

## Uses
> create object of Date_ using new Date_() | return object of Date object.
> new Date_() take one(date string) or no argument.
> new Date_.getDate() to get the new Date() object.
> new Date_.format() that takes format as string to return date as string

```sh
new Date_().getDate() --- return Date object with today date (Date_ { date: 2023-01-28T08:20:26.431Z })
new Date_("2023-01-23").getDate() ---returns (Date_ { date: 2023-01-23T08:20:26.431Z })
new Date_().format(formatString)
formatString can be anything with below keys to represent day month and year
1. DD/dd  03 
Example 2023-01-03
2. D/d ---7
3. MM/mm  01 
Example 2023-01-03
4. M/m ---1
5. mon for Month (January) mon3 (Jan) mon2 (Ja) mon4 (Janu)
Example 2023-01-03
6. day for Day (Tuesday) day3 (Tue) day2 (Tu) day4 (Tues)
Example 2023-01-03
7. YYYY/yyyyy ---2023 or YY/yy 23
```

## Example
```
new Date_("Jan 12, 2023").format("mm/dd/yyyy") returns 01/12/2023

new Date_("Jan 12, 2023").format("mm-dd-yyyy") returns 01-12-2023
new Date_("Jan 12, 2023").format("dd-mm-yyyy") returns 12-01-2023
new Date_("Jan 12, 2023").format("dd-mm-yy") returns 12-01-23

new Date_("Jan 12, 2023").format("day, DD, mon3") returns Thursday, 12, Jan
new Date_("Jan 12, 2023").format("day, DD, mon") returns Thursday, 12, January
new Date_("Jan 12, 2023").format("day3, DD, mon3") returns Thu, 12, Jan
```
supported delimiters are  { / , - , . , [space],[comma]}

## License

MIT

**Free Software, Hell Yeah!**
 Leave a star if like it | <https://github.com/sarfrajadstreaks/DateFormat>
  
