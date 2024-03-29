/*
Copyright (c) 2018 Keitaro AB

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

(function() {
  'use strict';
    $(document).ready(function () {

    var datePickerElements = $('.date-picker');

    datePickerElements.each(function (e) {
      var calendarSelector = $("#" + $(this).attr('id'));
      var calendarInput = "#" + $(this).attr('id') + "-input";
      var selectedValue = document.getElementById($(this).attr('id') + '-input').value;
      var selectedDate = new Date(selectedValue);

      var calendarOptions = {
        showButtonPanel: true,
        dateFormat: "yy-mm-dd",
        altField: calendarInput
      };

      calendarSelector.datepicker(calendarOptions);
      calendarSelector.datepicker('setDate', selectedDate);

      calendarSelector.on('change', function(evt){
        evt.preventDefault();
        calendarSelector.datepicker('setDate', new Date(evt.target.value));
      });
    });
  });
})($);