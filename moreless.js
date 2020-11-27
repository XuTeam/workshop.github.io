

function showtext()
{
var text="After becoming a full professor in 1996,he continues to be a Visiting Professor and Senior Lecturer of Ocean/Mechanical Engineering at MIT. He is an AAAS Fellow (2018-), Fellow of the Society for Industrial and Applied Mathematics (SIAM, 2010-), Fellow of the American Physical Society (APS, 2004-), Fellow of the American Society of Mechanical Engineers (ASME, 2003-) and Associate Fellow of the American Institute of Aeronautics and Astronautics (AIAA, 2006-).He received Alexander von Humboldt award in 2017, the Ralf E <span class=SpellE>Kleinman</span> award from SIAM (2015), the J. Tinsley Oden Medal (2013), and the CFD award (2007) by the US Association in Computational Mechanics. His h-index is 103 and hehas been cited over 52,500 times"; 
var f=document.getElementById("textarea")
f.innerHTML = text;
f.style.fontSize = '16pt';
f.style.fontFamily = "Times New Roman";
}

function toggleTextArea()
{
  var limitedHeight = '40px';
  var targetEle = document.getElementById("textarea");
  targetEle.style.height = (targetEle.style.height === '') ? limitedHeight : '';
}