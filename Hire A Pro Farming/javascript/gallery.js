  
      // Lightbox functionality

        let currentImageIndex = 0;

        const images = [

            { src: 'images/download.JPG', caption: 'image 1' },

            { src: 'images/G.JPEG', caption: 'image 2' },

            { src: 'images/Bb.JPEG', caption: 'image 3' },

            { src: 'images/A.JPEG', caption: 'image 4' },

            { src: 'images/picture.JPG', caption: 'image 5' },

            { src: 'images/I.JPEG', caption: 'image 6' },

            { src: 'images/hire a pro.JPG', caption: 'image 7' },

            { src: 'images/chicken.JFIF', caption: 'image 8' },
			
            { src: 'images/Ff.JPEG', caption: 'image 9' },
			   
			{ src: 'images/Cows.JFIF', caption: 'image 10' },
			
			{ src: 'images/Gg.JPEG', caption: 'image 11' },
				  
		    { src: 'images/T.JPEG', caption: 'image 12' },
					
		    { src: 'images/goats.JFIF', caption: 'image 13' },
					  
		    { src: 'images/Aa.JPEG', caption: 'image 14' },
						
		    { src: 'images/crops.JFIF', caption: 'image 15' },
						  
		    { src: 'images/header.JPEG', caption: 'image 16' },

        ];

       

        function openLightbox(src, caption) {

            const lightbox = document.getElementById('lightbox');

            const lightboxImg = document.getElementById('lightbox-img');

            const lightboxCaption = document.getElementById('lightbox-caption');

           

            // Find the index of the clicked image

            currentImageIndex = images.findIndex(img => img.src === src);

           

            lightboxImg.src = src;

            lightboxCaption.textContent = caption;

            lightbox.style.display = 'flex';

            document.body.style.overflow = 'auto';

        }

       

        function closeLightbox() {

            const lightbox = document.getElementById('lightbox');

            lightbox.style.display = 'none';

            document.body.style.overflow = 'auto';

        }

       

        function changeImage(direction) {

            currentImageIndex += direction;
   
            

            // Wrap around if at beginning or end

            if (currentImageIndex < 0) {

                currentImageIndex = images.length - 1;

            } else if (currentImageIndex >= images.length) {

                currentImageIndex = 0;

            }

           

            const lightboxImg = document.getElementById('lightbox-img');

            const lightboxCaption = document.getElementById('lightbox-caption');

           

            lightboxImg.src = images[currentImageIndex].src;

            lightboxCaption.textContent = images[currentImageIndex].caption;

        }

       

        // Close lightbox when clicking outside the image

        document.getElementById('lightbox').addEventListener('click', (e) => {

            if (e.target === document.getElementById('lightbox')) {

                closeLightbox();

            }

        }); 
		
/* LIVE-TIME*/
	
		function updateTime() {
			const now = new Date();
			document.getElementById("current-time").textContent = now.toLocaleString();
		}
		updateTime();
		setInterval(updateTime, 1000);
		
		
       
       