video 2
String myString;
Intenger i;
the name of a Class starts with UpperCase letter or constants like:
Math.PI
Color.blue 
Color.BLUE 
datos primitivos boolean byte char short int long float double etc minusculas 
expresiones y operadores
precedencia de operadores
operadores de asignacion
operadores aritmeticos 
module operator example
int currentHour = 10;
int hoursToAdd = 5;
int newHour = (currentHour + hoursToAdd) % 12; // Result: 3

    int number = 10;
    if (number % 2 == 0) {
        System.out.println("The number is even.");
    } else {
        System.out.println("The number is odd.");
    }

    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            System.out.println(i);
        }
    }
1
3
5
7
9

operadores unitarios (look for examples)
/*******************************************************************************************************************************/
video3
operadores logicos 
&& || ! and or not 
= vs == 
operadores logicos binarios ???
!(not)
10 & 12 == 8 
10|12 == 0b1110
n = n & ~2
corrimiento de bits
shift left 
shift right
-15>>3 //2
clean all bits
sentencias
/*******************************************************************************************************************************/
video4
params vs args
functions in jshell
functions vs methods

/*******************************************************************************************************************************/
video5
array
int[] myArr = {1,2,3,4,5};
int[] myArr = new int[5];
myArr.length
arreglos multidimensionales
int[][] myArr2 = new int[3][3];
rows columns in that order
System.arraycopy(myArr, 0, myArr);
/*******************************************************************************************************************************/
video6
/edit functionName (in jshell)
click exit button
ciclo for mejorado
int[] numbers = {1, 2, 3, 4, 5};
enhanced for loop
for (int number : numbers) {
    System.out.println(number);
}
/*******************************************************************************************************************************/
video7
method overloading
void
while loop
do while loop
bloques

/*******************************************************************************************************************************/
video8
conditions
if (student.equals("Michael")){} 
if
else if
else 
ternary operator 
print vs println
elvis operator 
/*******************************************************************************************************************************/
video9
break and continue 
nested for loop 
switch
null
leapYear example
/*******************************************************************************************************************************/
video10
classes(start with capital letter) 
new
objects
null
java.lang.nullPointerException error
equals()
init() 
createInstance()
execute()

/*******************************************************************************************************************************/
video11
liberar memoria usada por los objetos
garbage Collection = GC
fugas de memoriavaribale 
mutables e inmutables
this 

/*******************************************************************************************************************************/
video12
bubble sort
quick sort
nested for loop
myarray.sort();

/*******************************************************************************************************************************/
video13
exceptions
runtimeException
exception vs ioexception
throwable
try catch finally 
throw new Exception('Error')


/*******************************************************************************************************************************/
video14
static final String VAR1 = "Hola mundo";
static methods
final
constructor public private 
enum
/*******************************************************************************************************************************/
video15
variables
palabras reservadas
tipos de datos
notacion de numeros
nomenclaturas para nombrar variables
operadores de asignacion aritmeticos unitarios logicos. 
sentencias
methodos 
arreglos
ciclos
sobrecarga de methods
bloques
conditions
break and continue
switch
classes y objetos difference
referencias
this
exceptions
methodos y campos estaticos
control de accesso a los miembros de una clase

/*******************************************************************************************************************************/
video18
virtual machine
System
System.out
Ejemplo.java   //UTF-8
javac MartinsClass.java
java MartinsClass
type Ejemplo.java
dir 
java MartinsClass
javac -encoding utf16 Ejemplo.java
/*******************************************************************************************************************************/
video 19
comments
javadoc
virtual machine (JVM)
compilar
/*******************************************************************************************************************************/
video 20
classpath
type MartinsClass.java
java -cp C:\javaLearningPath Ejemplo
java -cp C:\javaLearningPath MartinsClass
java -cp C:\javaLearningPath;C:\otroDir Ejemplo ???
.jar
la declaracion Package
package java;
com.rcosio.oop.MiClase
com.rcosio.oop.MartinsClass
move 
rd
javac -d . MiclaseJava.java 
javac -d C:\javaLearningPath MiClase.java
java com.rcosio.oop.MiClase
com.rcosio.oop.MiClase obj = new com.rcosio.oop.MiClase();
import com.rcosio.oop.MiClase;
import com.rcosio.oop.*;
MiClase obj = new MiClase();
/*******************************************************************************************************************************/
video 21
dir com\rcosio\oop
java -cp C:\javaLearningPath com.rcosio.oop.MiClase
set CLASSPATH=C:\javaLearningPath
java com.rcosio.oop.MiClase

PS C:\javaLearningPath> javac -d C:\javaLearningPath MiClassTwo.java
PS C:\javaLearningPath> java com.rcosio.oop.MiClassTwo
/*******************************************************************************************************************************/
video 22
??????????????????
import java.util.StringTokenizer;

import javax.naming.directory.DirContext;
import javax.naming.ldap.Rdn;

java.lang
javax
javac -d . MiClassTwo.java

PS C:\javaLearningPath> javac -d . MiClassTwo.java
PS C:\javaLearningPath> javac -d c:\javaLearningPath MiClassTwo.java
PS C:\javaLearningPath> java com.rcosio.oop.MiClassTwo
?????????????????????????????

/*******************************************************************************************************************************/
video 22
dir jdk*
api java documentation

/*******************************************************************************************************************************/
video 23
java.lang.System
System.out.println();
in, out, err
BufferedReader 
InputStreamReader
public static void main(String[] args) throws Exception{} ????
import java.util.Properties
learnJava>src>com>rcosio>SysteminTest> 
md build
learnJava>src>javac -d C:\javaLearningPath\build com\rcosio\SysteminTest.java  
learnJava>src>com>rcosio>SysteminTest.java 
learnJava>src>java -cp c:\learnJava\build com.rcosio.SysteminTest
import java.util.Properties
props.stringPropertyNames()
System.getProperty()

/*******************************************************************************************************************************/
// video 24 
// datos primitivos
// java.lang.Boolean
// MIN_VALUE and MAX_VALUE
// autoboxing
// boxing vs unboxing
// intValue();
// String

// /*******************************************************************************************************************************/
// video 25 
// StringBuilder
// System.currentTimeMillis()
// /*******************************************************************************************************************************/
// video 26 
// StringTokenizer
// javac -d c:\javaLearningPath\build com\rcosio\StringTokenizerDemo.java
// java -cp c:\javaLearningPath\build com\rcosio.StringTokenizerDemo


// /*******************************************************************************************************************************/
// video 42
// install netbeans 
// set enviroment variables
// tools>options>fontsandcolors>lucidaconsole14
// C:\Program Files\NetBeans-17\netbeans\etc\netbeans.conf
// update neatbeans version
// /*******************************************************************************************************************************/
// video 43
// file>newProject>javawithant>javaapplication>select2options>
// C:\learnJava\MiProject
// right click new>javaClass>
// tools>options>fontsandcolors>lucidaconsole14
// psvm+tab
// sout+tab
// miProject>properties>build>compiling>compileonsave
// miProject>build
// window + reset window
// window>output
// .jar file in java
// learnJava/miprojecto/dist/miprojecto.jar
// java -cp c:\learnjava\miprojecto\dist\miproject.jar com.rcosio.HolaMundo         // hola mundo 
// miprojecto>properties>run>mainclass>com.rcosio.HolaMundo
// /*******************************************************************************************************************************/
// video 44
// println + crtl + space
// StringTokenizer ???
// run > runfile
// navegator
// window + navegator
// go to type  contrl + o 
// nombreApellido; cntl + k 
// go to line cntl + g
// TODO
// BufferedReader 
// InputStreamReader
// window + action items
// filter todo's in java
// /*******************************************************************************************************************************/
// video 45
// click on line numbers to create a breakpoint
// debug + debugFile
// debug + step over
// debug + step into
// variables-breakpoints-output
// debug + evaluate expresion
// debug (take a full course)
// /*******************************************************************************************************************************/
// video 46
// window + debugging + breakpoints

// /*******************************************************************************************************************************/
// video 50
// java Project with existing recourses
// projectName: learnJava
// projectFolder: c:\theJavaPath\learnJava
// miproject>rightclick properties > 

// video 51
// c:\theJavaPath\learnJava>jshell -v













// /*******************************************************************************************************************************/
// https://www.youtube.com/watch?v=zil6BaMkX9E&t=26s
// java --version
// javac --version
// echo %JAVA_HOME%
// C:\Program Files\MySQL\MySQL Server 8.0\bin
// C:\Program Files\Java\jdk-20\bin
// https://www.youtube.com/watch?v=KtmqG_14048


// /*******************************************************************************************************************************/




// /*******************************************************************************************************************************/




// /*******************************************************************************************************************************/