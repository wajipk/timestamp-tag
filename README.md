#timestamp-tag
A JavaScript dateTime format library that will replace timestamp tag with time. The time in timestamp tag should be in UNIX time.<br>
If you need to add a character inside a time, then you can write it using a Forward Slash `/`. This character will not be replaced by a reserve words. Please see the example.<br>
If you set the attribute `timeago="true"` then the format will be ignore and it will show the time passed.

<h3>Example</h3>
`<timestamp format="l dS /o/f F Y h:i:s A" class="yourClass" id="yourID" style="yourStyle"> 1424861883 </timestamp>`<br>
Will be converted to <br>
`<div class="yourClass" id="yourID" style="yourStyle" title="Wednesday 25th of February 2015 15:58:03 PM">Wednesday 25th of February 2015 15:58:03 PM</div>`
<br>
`<timestamp timeago="true" class="yourClass" id="yourID" style="yourStyle"> 1424861883 </timestamp>`<br>
Will be converted to <br>
`<div class="yourClass" id="yourID" style="yourStyle" title="6 hours ago">6 hours ago</div>`

<br>
<h3><a href="http://pakipreneurs.com">See Full Documentation</a></h3>
<br>
<table>
  <thead>
    <tr>
      <th>Format character</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>d</td>
      <td>Day of the month, 2 digits with leading zeros</td>
      <td>01 to 31</td>
    </tr>
    <tr>
      <td>D</td>
      <td>A textual representation of a day, three letters</td>
      <td>Mon through Sun</td>
    </tr>
    <tr>
      <td>j</td>
      <td>Day of the month without leading zeros</td>
      <td>1 to 31</td>
    </tr>
    <tr>
      <td>l</td>
      <td>A full textual representation of the day of the week</td>
      <td>Sunday through Saturday</td>
    </tr>
    <tr>
      <td>N</td>
      <td>ISO-8601 numeric representation of the day of the week</td>
      <td>1 (for Monday) through 7 (for Sunday)</td>
    </tr>
    <tr>
      <td>S</td>
      <td>English ordinal suffix for the day of the month, 2 characters</td>
      <td>st, nd, rd or th. Works well with j</td>
    </tr>
    <tr>
      <td>w</td>
      <td>Numeric representation of the day of the week</td>
      <td>0 (for Sunday) through 6 (for Saturday)</td>
    </tr>
    <tr>
      <td>W</td>
      <td>ISO-8601 week number of year, weeks starting on Monday</td>
      <td>Example: 42 (the 42nd week in the year)</td>
    </tr>
    <tr>
      <td>F</td>
      <td>A full textual representation of a month, such as January or March</td>
      <td>January through December</td>
    </tr>
    <tr>
      <td>m</td>
      <td>Numeric representation of a month, with leading zeros</td>
      <td>01 through 12</td>
    </tr>
    <tr>
      <td>M</td>
      <td>A short textual representation of a month, three letters</td>
      <td>Jan through Dec</td>
    </tr>
    <tr>
      <td>n</td>
      <td>Numeric representation of a month, without leading zeros</td>
      <td>1 through 12</td>
    </tr>
    <tr>
      <td>t</td>
      <td>Number of days in the given month</td>
      <td>28 through 31</td>
    </tr>
    <tr>
      <td>Y</td>
      <td>A full numeric representation of a year, 4 digits</td>
      <td>Examples: 1999 or 2003</td>
    </tr>
    <tr>
      <td>y</td>
      <td>A two digit representation of a year</td>
      <td>Examples: 99 or 03</td>
    </tr>
    <tr>
      <td>a</td>
      <td>Lowercase Ante meridiem and Post meridiem</td>
      <td>am or pm</td>
    </tr>
    <tr>
      <td>A</td>
      <td>Uppercase Ante meridiem and Post meridiem</td>
      <td>AM or PM</td>
    </tr>
    <tr>
      <td>g</td>
      <td>12-hour format of an hour without leading zeros</td>
      <td>1 through 12</td>
    </tr>
    <tr>
      <td>G</td>
      <td>24-hour format of an hour without leading zeros</td>
      <td>0 through 23</td>
    </tr>
    <tr>
      <td>h</td>
      <td>12-hour format of an hour with leading zeros</td>
      <td>01 through 12</td>
    </tr>
    <tr>
      <td>H</td>
      <td>24-hour format of an hour with leading zeros</td>
      <td>00 through 23</td>
    </tr>
    <tr>
      <td>i</td>
      <td>Minutes with leading zeros</td>
      <td>00 to 59</td>
    </tr>
    <tr>
      <td>s</td>
      <td>Seconds, with leading zeros</td>
      <td>00 through 59</td>
    </tr>
  </tbody>
</table>
