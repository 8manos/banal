"use strict";$(document).ready(function(){function s(s){var a=Date.parse(s)-Date.now(),t=Math.ceil(a/6e4),e=Math.ceil(a/36e5),n=Math.ceil(a/864e5);return{total:a,days:n,hours:e,minutes:t}}function a(){var a=s(t),e=$(".dias"),n=$(".horas"),o=$(".minutos");e.text(a.days),n.text(a.hours),o.text(a.minutes)}var t="2016-09-15 00:00";a();setInterval(a,1e3);$("a.mostrar_span").on("click",function(s){s.preventDefault(),$(this).parents("span").hasClass("open")?$(this).parents("span").removeClass("open"):$(this).parents("span").addClass("open")}),$("section span a").addClass("shake-slow shake-constant--hover")});