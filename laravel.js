<!DOCTYPE html>
<html>
<head>
    <title>My Application</title>
</head>
<body>
    <header>
        <!-- Your header content here -->
    </header>


    <footer>
        <!-- Your footer content here -->
    </footer>
</body>
</html>
/************************************************/
@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Welcome to My Application!</h1>
        <p>This is the main content area.</p>
    </div>
@endsection
/************************************************/
@include('partials.header')

@yield('content')

@include('partials.footer')
/************************************************/
Route::get('/', function () {
    return view('welcome');
});

/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/



/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/


/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/


/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/



/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/



/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/



/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/



/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/



/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/


/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
/**********************************************************************************************************************************/
