---
id: javascript-patterns
slug: /it/programming/javascript/patterns
description: TODO
---


Javascript Handy Patterns
===============================================================================

Get Local Time for Set Date
-------------------------------------------------------------------------------

```javascript
<script type="text/javascript">
  const event_date = 'March 15, 2023';
  const event_time_pst = '10:00 PDT';
  const tz_format = new Intl.DateTimeFormat('en-US', {hour: "2-digit",minute:"2-digit", local_timezone, timeZoneName: "short"});
  const local_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const event_time_str = new Date(event_date.concat(" ", event_time_pst));
  let local_event_time = tz_format.format(event_time_str);
  document.write(local_event_time);
  // documentgetElementById("my_id").innerHTML = local_event_time;
</script>
```
