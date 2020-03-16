<html> 
<head> 
	<meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script> 
    <title>Carousel</title> 
<style>
@font-face { font-family: MechanicalPencil; src: url('Mechanic_Pencil.TTF');  } 
@font-face { font-family: QuickPencil-Regular; src: url('QuickPencil-Regular.TTF'); } 

span{
    color:blue;

}

h5{
    color:black;
}

p{
    color:black;
}

li{
background-color:black;

}

.carousel-control-next-icon
{
    background-color: #000000 !important;
   
}

.carousel-control-prev-icon
{
    background-color: #000000 !important;
}

</style>




</head> 
<body> 
 
	<div class="container">
 
		<center>
			<h3>INDONESIA POWER</h3>
			<h4><a href="">Rizky</a></h4>
		</center>
 
		<div class="bd-example">
			<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
            <!-- <img src="1.svg" class="d-block w-100" alt="..."> -->
            <iframe src="1.svg"  style="width:100%;height:100%;border:none; align:top;"></iframe>
						<div class="carousel-caption d-none d-md-block">
							<h5>Gambar Slide Yang Pertama</h5>
							<p>Gambar pemandangan sungai.</p>
						</div>
					</div>
					<div class="carousel-item">
            <!-- <img src="2.svg" class="d-block w-100" alt="..."> -->
            <iframe src="2.svg"  style="width:100%;height:100%;border:none; align:top;"></iframe>
						<div class="carousel-caption d-none d-md-block">
							<h5>Gambar Slide Yang Kedua</h5>
							<p>Gambar pemandangan sawah di desa.</p>
						</div>
					</div>
					<div class="carousel-item">
            <iframe src="3.svg"  style="width:100%;height:100%;border:none; align:top;"></iframe>
						<div class="carousel-caption d-none d-md-block">
							<h5>Gambar Slide Yang Ketiga</h5>
							<p>Gambar pemandangan taman belakang rumah.</p>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
 
	</div>
 
</body> 
</html>