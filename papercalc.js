var square = "2";
var four = "4";
var three = "3";
var zero = "0";
//object Array creation
var calc = []
function Calc(name, param1, param2, param3, param4, param5, param6, unit1, unit2, unit3, unit4, unit5, unit6, definition, details) {
  this.name = name;
  this.param1 = param1;
  this.param2 = param2;
  this.param3 = param3;
  this.param4 = param4;
  this.param5 = param5;
  this.param6 = param6;
  this.unit1 = unit1;
  this.unit2 = unit2;
  this.unit3 = unit3;
  this.unit4 = unit4;
  this.unit5 = unit5;
  this.unit6 = unit6;
  this.definition = definition;
  this.details = details;
}

const Alkalanity = new Calc("Alkalinity", "Burette Reading", "Normality of Hcl", "Sample Weight", "", "", "",
  "ml", "N", "g", "", "", "ppm", "Alkalanity is the capacity  of water to  resist changes in pH that would make water more acidic.\
 </br> </br>It is measured by titrating sample with a acid until pH changes abruptly. \
 </br> Alkalinity is expressed as phenolphthalin alkalinity or total alkalinity. </br> </br> Phenolphthalin alkalinity measures the hydroxides and half of \
   the carbonates at ph 8.3 . Phenolphthalin indicator is used in titration. </br> </br> Total alkalinity measures all carbonate,bicarbonate and hydroxide \
   alkalinity at ph 4.5 . Methyl Orange indicator is used in this titration.   </br> </br>Formula for calculation of Alkalinity =  A*N*50000/Sample weight, where A is beurette reading and N is normality of acid.",
  "https://en.wikipedia.org/wiki/Alkalinity")

Alkalanity.calculate = function () { return v6 = v1 * v2 * 50000 / v3 };
calc.push(Alkalanity);
//Acidity
const Acidity = new Calc("Acidity", "Burette Reading", "Normality of NaOH", "Sample Weight", "", "", "", "ml", "N", "g", "", "",
  "ppm", "Acidity is the capacity  of water to  resist changes in pH that would make water more alkaline.\
</br>It is measured by titrating sample  with a alkali until pH changes abruptly indicated by color change of phenolphthalin or methyl orange indicator.\
 </br> </br>Generally methyl orange acidity and phenolphthaline acidity are measured. \
</br> </br>Formula for calculation of Acidity =  A*N*50000/Sample weight, where A is beurette reading and N is normality of Alkali solution.",
  "https://en.wikipedia.org/wiki/Acidity_function")
//Ash Retention
  const Ash_retention = new Calc("First Pass Ash Retention", "H/B Ash", "B/W Ash", "", "", "", "", "%", "%", "", "", "", "%",
  "First pass retention and ash retention are important process parameters for wet-end control of paper machine.\
 </br> </br>Low values of FPR and ash retention results in inefficient use of costly furnish components.\
 </br> </br>Unretained furnish components like fillers,fibers and additives can create collection,disposal and deposits problems.")
Ash_retention.calculate = () => (v1 - v2) * 100 / v1
calc.push(Ash_retention)

Acidity.calculate = function () { return v1 * v2 * 50000 / v3 };
calc.push(Acidity)
//Alkali Loss
var Alkali_Loss = new Calc("Alkali loss", "Burette Reading", "Normality of Hcl", "Sample Weight", "", "", "", "ml",
  "N", "g", "", "", "kg/T", "Alkali Loss is the amount of residual alkali in pulp after washing of pulp.\
 </br>It is measured by titrating with a acid until pH changes abruptly. \
 </br>Formula for calculation  Alkali Loss = A*N*40/Sample weight where A is beurette reading and N is normality of acid." )
Alkali_Loss.calculate = function () { return v1 * v2 * 40 / v3 };
calc.push(Alkali_Loss);


//bod
const BOD = new Calc("BOD", "Initial DO", "Final DO", "fraction of sample used  for titration", "", "", "", "mg/l", "mg/l",
  "", "", "", "mg/l", " BOD or Biochemical oxygen demand of polluted water is the amount of oxygen required for the biological\
 decomposition of dissolved organic matter under aerobic condition usually at 20 degree centigrade in 5 days.Biochemical\
  oxygen demand biological oxygen demand is an important water quality parameter because it provides an index to assess the effect discharged\
   wastewater will   have on the receiving  environment. ... Depletion of DO causes stress on aquatic organisms, making the environment\
    unsuitable for life. BOD is similar to COD anlaysis. However BOD is more specific since it measures organic matter that can be oxidised\
     biologically. The BOD is used in measuring waste loadings to treatment plants and measuring efficiency of tratment plants \
     in terms of BOD ", " https://en.wikipedia.org/wiki/Biochemical_oxygen_demand")
BOD.calculate = () => (v1 - v2) / v3;
calc.push(BOD)


const Breaking_Length = new Calc("Breaking Length", "Tensile strength", "GSM", "", "", "", "", "kN/m", "g/m2", "", "", " ", "meters",
  "Breaking length is calculated length of paper beyond which if paper  is suspended at one end it will break of its own weight.\
</br> </br> Breaking length is calculated from Tensile strength by formula  BL = 102000(T/R) where T is tensile strength in kN/m\
 and R is paper gsm. "  )
Breaking_Length.calculate = function () { return 102000 * v1 / v2 }
calc.push(Breaking_Length);

//brightness whiteness and shade
const brightness_whiteness_shade = {
  name: "Brightness,Whiteness and Shade", definition: "Brightness is a measurement of\
 reflectance of blue light  of wavelength 457nm,Tappi standard and ISO standards are commonly used for brightness\
  measurement. A 95  bright paper reflects more light than an 85 bright paper, therefore appearing brighter.  \
 </br> </br> Using the specific blue light to measure this reflection ignores longer wavelengths, including green and red. Because of this, \
  two types of paper with the same brightness can visually appear very different, even though their “brightness” is the same.\
    </br> </br>Whiteness measures  reflectance of all wavelengths of light across visible spectrum, Because of this, the whiteness measure is more in line with our visual\
     perception. The most common whiteness measure, D65 illumination, represents outdoor daylight. This standard is called CIE Whiteness and was developed by the French-based International Commission on Illumination \
     (also abbreviated CIE).  </br> </br>Shade is measurement of  color of paper.</br>  CIE L*a*b model is used for color measurement.\
  L value is a measure of lightness along black white axis,a is measure of red/ green and b is a measure of blue/yellow. "}
calc.push(brightness_whiteness_shade);

//burst factor
const Bursting_strength = {
  name: "Bursting Strength", definition: "Bursting strength is measured as the maximum hydrostatic pressure \
required to rupture the sample by constantly increasing the pressure applied through a rubber diaphgram on 30.5 mm diameter sample. \
 </br> </br>Bursting strength tells how much pressure a paper can tolerate before rupture.</br> </br> Equipment used for testing Burst factor is\
 is called Mullen Tester. </br> </br>Burst factor is given by the expression BF = Bursting Strength/GSM where Bursting strength unit is g/square cm2 \
 and gsm is g per meter square. </br> </br>Burst factor is an important parameter for packaging grades of paper. Bursting strength indicates a composite of \
 strength and toughness.Hence it is useful in packaging grades of paper where paper is subjected to a stress similar to that exerted in Burst test.\
 After every 100 readings equipment is calibrated using aluminum foil and after every 500 readings  or six months whichever is earlier \
 diaphragm  is replaced "}
calc.push(Bursting_strength)
// Conditioning of paper
const Conditioning = {
  name: "Conditioning of Paper", definition: `Paper is hygroscopic in nature  ie it is capable of absorbing water from \
surroundings atmosphere. Amount of absorbed water depends on humidity and temperature of air in contact with paper, hence even slight changes in \
humidity and temperature affect test results . So it is necessary to maintain standard conditions during testing of paper. </br> </br>
Under Tappi standard all tests are carried out at 23 ${zero.sup()}C+- 1 and \
50+2 % relative humidity.`}
calc.push(Conditioning);
//cobb
var Cobb = {
  name: "Cobb", definition: "Cobb test measures amount of water absorbed in to the surface \
of a sized paper by exposing  paper surface to fixed amount of water for a certain period usually 45 sec.",
  details: "https://law.resource.org/pub/us/cfr/ibr/004/iso.535.1991.pdf"
}

calc.push(Cobb);
// change in crown of rolls
var change_in_crown = new Calc("Change in crown of two rolls", "Nip width at ends", "Nip width at center",
  "Top roll diameter", "Bottom roll diameter", "", "", "mm", "mm", "mm", "mm", "", "mm", "Roll crowing is common method to reduce nip variations\
 caused by roll deflection. Roll crowing is calculated from Nip impression or deflection of roll. " )
change_in_crown.calculate = function () { return ((Math.pow(v1, 2) - Math.pow(v2, 2)) * -(-v3 - v4)) / (2 * v3 * v4) }
calc.push(change_in_crown);
//critical speed of a roll
const critical_speed = new Calc("Critical Speed of a roll", "Outside dia. of roll", "roll deflection", "", ""
  , "", "", "m", "m", "", "", "", "m/min", "Critical speed is the speed at which dynamic  forces causes a shaft or rotor to vibrate\
 at its natural frequency and can result in resonant vibration in the entire machinary.")
critical_speed.calculate = () => 93.96 * v1 / Math.sqrt(v2)
calc.push(critical_speed)

// Dissolved oxygen
const Dissolved_oxygen = {
  name: "Dissolved Oxygen of Water", definition: "Dissolved Oxygen of Water is ml of Sodium thiosulphate of 0.025N consumed for \
titrating 200 ml of sample.The test is known as Winkler  test method. </br> </br>The dissolved oxygen is first fixed by  adding \
magnese sulphate and then alkali iodide azide is added followed by concentrated sulphuric acid. The sample is then titrated\
using iodometric titration using starch indicator.",details:"https://en.wikipedia.org/wiki/Biochemical_oxygen_demand"}
calc.push(Dissolved_oxygen)
const Degree_sr = {
  name: "Degree SR of Pulp", definition: "The Schopper degree test is designed to provide a measure of the rate \
 at which a dilute suspension of pulp may be dewatered. One 0SR corresponds to 10 ml of water.</br> </br> For testing, 2 g pulp is taken \
 and diluted to 1000 ml  with stirring. The pulp suspension is then drained and drained water is taken in a graduated\
 cylinder and amount of water drained is expressed as degree SR."}
calc.push(Degree_sr)


const Dandy_dia = new Calc("Dandy Diameter", "M/c Speed", "Max.rpm", "", "", "", "", "mpm", "number", "", "", "", "m",
  "For high speed machines bigger diameter of dandy roll is necessary to avoid damage to web because at high speed dandy roll throws water.")
Dandy_dia.calculate = () => v1 / (3.14 * v2)
calc.push(Dandy_dia)

//Dose calculation batch
var Dose_batch = new Calc("Dosing(Batch)", "Total Volume", "Ingradient quantity", "Ingradient purity(100 for as such basis)", "", "", "", "Liters", "g",
  "%", "", "", "g/l", "Generally amount of an ingradient present in total volume or weight is calculated in \
percentage,gpl,or ppm.   </br> </br> gpl = 10 X percentage, </br>  ppm = 1000 X gpl. ")
Dose_batch.calculate = function () { return (v2 * v3 / 100) / v1 }
calc.push(Dose_batch);
// Dose calculation continuous
var Dose_continuous = new Calc("Dosing(Continuous)", "Thruput ", "Ingradient Flow", "Ingradient purity(100 for as such basis)", "", "", "", "T/hr",
  "lpm", "%", "", "", "kg/T", "Dosing calculation is same as in batch, total volume becomes total flow rate and \
ingradient amount becomes ingradient flow. ")
Dose_continuous.calculate = function () { return (v2 * 60 * v3 / 100) / v1 }
calc.push(Dose_continuous);


//Drying Rate
var Drying_Rate = new Calc("Drying Rate", "Initial Dryness", "Final Dryness", "Production/Hr", "Dryer surface area",
  "No. of Dryers", "", "%", "%", "T/hr", "m^2", "No", "Kg/hr/m^2 ", "Drying Rate is defined  as kg water removed per hour per\
 unit surface area."
)
Drying_Rate.calculate = function () { return (((v2 / v1) - 1) * v3) / v4 * v5 }
calc.push(Drying_Rate);
//motor power
const Electric_power = new Calc("Electric output power of motor", "Current ", "Voltage", "Power factor", "Motor efficiency",
  "", "", "A", "v", "factor", "number", "", "KW", "Electric power of three phase motor is given by the formula 1.73* VI cosφ where cosφ\
 is power factor of circuit.")
Electric_power.calculate = () => v1 * v2 * v3 * 1.73 / 1000
calc.push(Electric_power)

//FPR
var FPR = new Calc("First Pass Retention", "Head Box Cy", "B/W cy", "", "", "", "", "%", "%", "", "", "", "%", "First pass retention\
 or FPR is calculated by formula FPR = (Head box Cy%- B/W cy% ) / H/B Cy%  multiplied by 100. FPR is an important parameter for\
 papermachine operation. Its value should remain steady and high enough  to avoid deposit and drainage problems. "  )
FPR.calculate = function () { return (v1 - v2) * 100 / v1 }
calc.push(FPR);

// Headbox pressure
var Headbox_Pressure = new Calc("HeadBox Pressure", "Jet Velocity", "", "", "", "", "", "mpm", "", "", "", "", "m H2O",
  "Head box prsessure of gravity feed headbox or pressurised headbox is given by expression  H = v2/2g. Frictional losses\
 are not included in this formula."  )
Headbox_Pressure.calculate = function () { return v1 * v1 / 70610 }
calc.push(Headbox_Pressure);


// defects in paper
const Paper_defects = {name:"Defects in Paper",definition:`For solving paper defect problems, first type of defect is confirmed\
 like holes,cracks,spots etc,then frequency is observed like if appearing continuously then it is a likely a problem of machine\
 pumps rolls,wire,felt etc if appering occasionall then it could be a problem of additives preparation system. Following are most\
 common defects. </br> <b> Air Bubbles </b>  Caused by too much water in paper </br> <b> Bursts </b> Bursts in a reel are caused\
 by high web  tension between rolls during winding </br>  <b> Blistering </b> It is caused when water vapour can not escape\
 fast enough through coating layers </br> <b> Calander mark </b>  It is caused by some extrenous material present in nips or \
 faulty calander surfaces  </br> <b> Cockling </b> Paper haswave like pattern </br> <b> Crush </b> It is caused by too much\
 pressure or moisture inpress section </br> <b> Dandy Mark </B> caused by fibers picking by Dandy roll from wet web </br> \
 <b> Felt Mark  </b> A spot or thin area caused by dirty or poor surface of felt </br> <b>  Foam spots </b> Spots or holes caused\
 by foam at the wet-end side </Br> <b> Holes </b> Holes in paper are caused by many reasons. Holes caused by wire are clean holes\
 holes are also caused by dirt and slimes.</br> <b> Pin holes </b> Pin holes are small hlles caused by foreign particles\
 </br> <b> piping </b> Defects in reels consists of ridges due to moisture take up by surface layers </br> <b> Wrinkles </b>\
 Wrinkles are narrow folds caused by uneven tension profile. wrinkles can happen in press,dryer or calander or in rewinder.`}
calc.push(Paper_defects)

//Machine Draw
var Machine_Draw = new Calc("Machine Production Rate", "Machine Speed", "Machine Deckle", "Paper GSM", "", "", "", "mpm", "m",
  "g/m2", "", "", "T/hr", "Paper machine thruput is calculated by the formula Production Rate = Machine Speed in mpm*gsm*Deckle*60/1000000.")


Machine_Draw.calculate = function () { return v1 * v2 * v3 * 60 / 1000000 };
calc.push(Machine_Draw);
//Pump basics
const Pump_basic = { name:'Pump Basics' ,definition:`A pump can be defined as a machine that increases the total energy of a liquid this means that
pump transfers mechanical energy to a fluid  and converts it to pressure energy of fluid. Generalyy pumps are of two types Centrifugal pump and positive
displacement pumps. Centrifugal pumps are suitable for low pressure high liquid flow rate application and positive displacement pumps are suitable 
for high pressure low flow rate applications. Centrifugal pumps require priming whwreas PD pumps dont require priming.All pumps have three parts
suction ,pump casing and delivery. In centrifugal pumps pump casing contains a impeller which rotates at very high rpm and inncrease the kinetic energy
of liquid in the outer side of pump casing,this creates a partial vaxuum at the center of casing and fluid iss sucked in through suction pipe.
The increased kinetic energy in converted to pressure in the oulet pipe of pump. </br> In Positive displacement pump, there are two valves one on suction
side and one on delivery side.The pump casing has a mechamism to suck liquid from suction side and deliver to delivery side,the mechanism is different
in reciprocating the mechanism include on cylinder and piston connected to motor by a connecting rod. in one cycle the piston movement create  suction
presurre and liwuid is sucked in othe movement of piston it compress the liquid and the is discharged through delivery pipe. In rotary PD pump 
the mechanism consists of rotating gears in case of gear pumps and rotating screw in case of screw pumps.
 `}
calc.push(Pump_basic)
//Pump output power
var Pump_output_power = new Calc("Pump output power", "Flow rate ", "Developed Head", "Density of fluid", "", "", "", "m^3/hr",
  "meter", "kg/m^3", "", "", "KW", "Pump output power is useful work done by pump and is given by the expression\
 Power = Flow rate X Head developed X Density of fluid X g.")
Pump_output_power.calculate = function () { return v1 * v2 * v3 * 9.81 / 3600000 }
calc.push(Pump_output_power);

//Pump NPSH 
const NPSH = new Calc('Pump NPSHA','Atmospheric pressure (10.33)',' Liquid level above/below pump (- in case below)','frictional pressure loss approx 2 meters'
,'Vapour pressure of liquid','velocity head approx 2-2.5 m ','','meter','meter','meter','meter','meter',
'meter',`Pump Net positive suction pressure should be above vapoure pressure of liquid otherwise liquid will start
boiling and will create cavitation problem in pump`)
NPSH.calculate = () => v1+v2-v3-v4-v5
calc.push(NPSH)
//ream weight
var Weight_Ream = new Calc("Weight of Ream (500 Sheets)", "Length", "Width", "GSm", "", "", "", "cm", "cm", "g/m^2", "", "", "kg",
  "Forrmula for calculation of ream weight is Length x width x gsm *0.5  ")
Weight_Ream.calculate = function () { return (v1 / 100) * (v2 / 100) * v3 * 0.5 }
calc.push(Weight_Ream);
// v notch flow
var V_notch_flow = new Calc("V Notch Flow Rate", "Head above notch apex", "Notch angle(90 or 60)", "", "", "", "", "mm", "Degrees", "",
  "", "", "m3/hr", "Triangular weir notches are sharp crested  V shaped thin plates. These plates are installed at the exit of channel\
 for measuring real time flow. The flow of water is directly proportionl to the head of water at weir."  )
V_notch_flow.calculate = function () { if (v2 == "90") { return Math.pow(v1, 2.5) * 1.3466 * 3.6 } else { return Math.pow(v1, 2.5) * 0.7666 } }
calc.push(V_notch_flow);
// breaking length

// pH of solution

var pH_of_Solution = {
  name: "pH of Solution", details: "https://en.wikipedia.org/wiki/PH",
  definition: "pH is a scale used  to specify acidity or basicity\
 of an aqueous solution.Acidic Solutions have pH less than 7 and basic solutions have pH more than 7.\
 </br> </br> The pH scale is logarithamic and inversely indicate the hydrogen ion concentration.\
 It is expressed as pH = - log [H+]."  }
calc.push(pH_of_Solution);
const kappa_number = new Calc("Kappa Number", "Amount of 0.1 N permegnate solution consumed", "weight of pulp", "", "", "",
  "", "ml", "g", "", "", "", "number", "Kappa number is volume (in ml) of 0.1 N potassium permagnate solution consumed by\
1 g of pulp. ", "https://en.wikipedia.org/wiki/Kappa_number#:~:text=The%20Kappa%20number%20is%20a,pulping%20process%2C%20from%20the%20hemicelluloses.")
kappa_number.calculate = function () { return v1 / v2 }
calc.push(kappa_number)
//viscosity of pulp
const viscosity_pulp = new Calc("Viscosity Of Pulp", "Viscometer Constant", "effux time", "", "", "",
  "", "number", "sec", "", "", "", "cP", "Pulp solution viscosity gives an indication of  degree of polymerisation of cellulose.\
</Br> </br>Therefore it gives indication of degradation of cellulose resulting from pulping and bleaching operations.")

viscosity_pulp.calculate = function () { return v1 * v2 }
calc.push(viscosity_pulp)
// Pressure drop in stock pipe
const pressure_drop = new Calc("Pressure Drop in Pipes", "Flow Rate", "Pipe inside diameter",
  "", "Fluid viscosity", "Pipe Length", "", `m${three.sup()}/sec`, "meter",
  `kg/m${three.sup()}`, `N-s/m${square.sup()}`, `m`, `N/m${square.sup()}`
  , `Pressure drop in a pipe is given by the formula\
 P1-P2 = 128µLQ/πD${four.sup()}. The above formula is derived from Poiseuille equation.`)
pressure_drop.calculate = function () { return (128 * v4 * v1 * v5) / (3.14 * v2 * v2 * v2 * v2) }
calc.push(pressure_drop);
//Nip load
const Nipload = new Calc('Nip Load','Roll weight','Roll diameter','Pressure','Nip width','','','Kg','cm','kg/cm2','cm','','kg/cm'
,`Nip load is expressed as pressure per unit length ,if pressure is applied on top roll it is added to weight or if applied\
 to bottom roll it is substracted. It is calculated as Nip load = 2*pi/4*d ${square.sup()}*Pressure+- Roll weight`)

Nipload.calculate = () =>(2*(3.14/4)*v2**2+v1)/v4
calc.push(Nipload)
//pump power
const Pump_Power = new Calc("Pump Power", "Flow Rate", "Total head", "efficiency of pump and motor", "", "", "",
  "meter cube/hr", "meters", "fraction", "", "", "HP", "Pump power depends on total head (developed+frictional),flow rate \
and pump+motor efficiency.",)
Pump_Power.calculate = () => (v1 * v2) / (75 * v3)
calc.push(Pump_Power)
// Vacum pump capacity
const vacuum_pump = new Calc("Vacuum Pump Capacity", "Leak Rate", "System Pressure", "", "", "", `m${three.sup()}`,
  "Torr liter/sec", "Torr", ",", "", "", "meter cube/hr", " Vaccum pump capacity is calculated my measuring leakage rate ie increase of pressure\
 after attaining vacuum level in certain time and expressed in units of Pressure.Vol/sec.</Br> So by multiplying Leakage with Vacuum level\
 required we can determine vaccum pump capacity in meter cube per hour. ", "https://www.ippta.co/Misc.Publication/DIY_Guidelines_for_Optimization_of_Wire_Vacuum.pdf")
vacuum_pump.calculate = () => v1 * 3.6 / v2
calc.push(vacuum_pump)
//moment of inertia roll
const moment_inertia = new Calc("Moment of Inertia of a roll", "Density of material", "Length of roll", "outside dia. of roll", "inside dia.of roll",
  "", "", `kg/m${three.sup()}`, "meter", "meter", "meter", "", `kg.m${square.sup()}`, "Moment of inertia express a body,s\
 tendency to resist angular acceleration. It is equal to sum of product of mass of each particle  and square of its distance from\
 axis of roation.</Br> It determines how much torque is required for angular acceleration similar to how mass determines\
 how much force is required for linear acceleration.",)
moment_inertia.calculate = () => 0.09817 * v1 * v2 * (Math.pow(v3, 4) - Math.pow(v4, 4))
calc.push(moment_inertia)
//head box flow rate
const Headbox_flow = new Calc("Headbox Flow Rate", "Jet Velocity", "Slice Opening", "Orifice cofficient", "", "", "",
  "mpm", "mm", "number", "", "", "L/min/m", "Head box Flow/unit width is equal to slice opening multiplied by jet  velocity and \
 coefficient of geometry of slice, for nozzle it is about 0.95 for low angle it is about 0.75.")
Headbox_flow.calculate = () => v1 * v2 * v3
calc.push(Headbox_flow)

// Residual chlorine
var R_chlorine = new Calc("Residual Chlorine", "Burette Reading", "Normality of Sodium Thiosulphate", "Sample Volume", "", "", "", "ml", "N", "g", "",
  "", "ppm", "Residual chlorine is low amount of chlorine left in pulp  after washing of pulp.\
    </br>It is measured by titrating with a Sodium thiosulphate using starch iodine titration method until color changes.   \
    </br> </br>Formula for calculation  of residual chlorine = V*N* 35.5/Sample volume, where V is beurette reading and N is normality of sodium thiosulphate.")
R_chlorine.calculate = function () { return v1 * v2 * 35.5 / v3 };
calc.push(R_chlorine);


const Tearing_strength = new Calc("Tearing Factor", "Tearing Strength", "Basis Weight", "", "", "", "", "mN", "gram per square meter", "",
  "", "", `mN/g/m${square.sup()} `, "Tearing Strength of paper is resistance of paper to tearing force it is subjected to.\
 It is a basic physical property of paper and paperboard. It is measured in both machine  and cross directions.</br> \
 </br>Tear factor of paper is calculated as Tearing strength per unit basis weight." )
Tearing_strength.calculate = () => v1 / v2;
calc.push(Tearing_strength);

const Total_active_effective_alkali = new Calc("Total active and effective alkali", "Buerette Reading", "Normality of Hcl",
  "Sample Volume", "", "", "", "ml", "N", "ml", "", "", "gpl as NaOH", "Effective alkali is measured by titrating sample with Hcl using\
 thymolphthalin indictor to pH 9.5,Formaldehyde is then added to convert hydrogen sulphide to strong base and active alkali is\
 determined by titrating to pH 8.0 using phenolphthalin indicator, finally total alkali is determined by continuing\
 titration to pH 4.0 using bromophenol blue indicator . </br> </br> Formula for calculation is Effective alkali/active alkali/total alkali\
 = Beurette Reading x Normality of Hcl / Sample volume.  Titration is same for all but beurette reading is different for different\
 types of alkali. ", "https://en.wikipedia.org/wiki/White_liquor")

Total_active_effective_alkali.calculate = () => v1 * v2 * 40 / v3;
calc.push(Total_active_effective_alkali)

const Relative_humadity = new Calc("Relative Humidity", "Dry Bulb Temperature", "Wet Bulb temperature", "", "", "", "",
  "Celcius", "Celcius", "", "", "", "%", " Relative humidity is the amount of water vapourpresent in air expressed as the percentage of amount\
 needed for saturation at the same temperature.</br> </br> Humidity an important parameters in printing industry,because paper\
 is a hygroscopic material and absorbs moisture from atmosphere. Humidity is calculated by noting dry and wet bulb temperatures\
 and using psychrometric charts.</br> </br> It can be calculated as RH(%)= Ew-N(1+0.00115*Tw)*(Td-Tw)/*100/Ed  where Ew is 6.112*exp((17.502+Td)/240.97+Tw) and Ed is\
 6.112*exp((17.502+Td)/240.97+Tw) )), Td is dry bulb temperature and Tw is wet bulb temperature.")
Relative_humadity.calculate = () => ((6.112 * Math.exp((17.502 * v2) / (240.97 + v2))) - 0.6687 * (1 + 0.00115 * v1) * (v1 - v2)) * 100 / (6.112 * Math.exp((17.502 * v1) / (240.97 + v1)))

calc.push(Relative_humadity);

// Smoothness bendtsen
const Smoothness = {
  name: "Smoothness of Paper", definition: "Smoothness is measure of ml of air escaping per minute\
 through the hills and valleys of surface of  paper.</br>  </br>Higher the value,rougher is the surface. This is mostly used for\
 uncoated paper. This test is used to predict flexographic printability. "}
calc.push(Smoothness)
// opacity

const Opacity = {
  name: "Opacity of Paper", definition: "Opacity of paper indicates resistance of paper to passage of light. \
<br> </br>This property is useful in book printing where both sides  of the paper are printed." }
calc.push(Opacity);

const Stiffness = {
  name: "Stiffness of Paper", definition: "Stiffness is a mesure of flexural rigidity of paper.\
 It is bending moment(g-cm or mNm) required to deflect the free end of a 1.5 inch wide vertically clamped sample \
 150 from its center line when load is applied 50 mm away from the clamp. </br>It is measured in MD and CD."}
calc.push(Stiffness)
// Porosity
const Porosity = {
  name: "Porosity of Paper", definition: " Porosity is air resistance of paper . It is indirect measure of\
 fluid premeability in to paper and other structural parameters.</br> </br> This method measures amount of time required for a certain\
 volume of air to pass through a  test specimen. The air pressure is generated by a gravity loaded cylinder that captures \
 an air volume within a chamber using a liquid seal. The pressurised volume of air is passed through the paper to atmosphere."}
calc.push(Porosity)
console.log(Relative_humadity.definition)
console.log(NPSH.param1)
const Tensile = new Calc("Tensile Index","Tensile Strength","Basis Weight","","","","","N/m","g/m2","","","","Nm/g",
"Tensile strength is maximum stress to break a paper sheet. It is one of the most important physical properties of paper\
 and paperboard . Generally tensile strength of materials is expressed in terms of load per unit area but in case of paper\
 it is generally expressed as load per unit width of speciman. there are several types of tensile testers used in paper industry\
 but the basic principle of all is same.","https://en.wikipedia.org/wiki/Ultimate_tensile_strength")
Tensile.calculate = () => v/v2
calc.push(Tensile)
