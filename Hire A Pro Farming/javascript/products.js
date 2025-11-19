
      // Lightbox functionality

        let currentImageIndex = 0;

        const images = [  

            { src: 'images/chicken.JFIF', caption: 'Fresh poulty available' },

            { src: 'images/organic.JPEG', caption: 'Organic Vegetables' },

            { src: 'images/eggs.JPEG', caption: 'fresh eggs' },

            { src: 'images/milk.JPEG', caption: 'Dairy products' },

            { src: 'images/Cows.JFIF', caption: 'fresh cows for sale' },

            { src: 'images/A.JPEG', caption: 'Livestock sheep for sale' },

            { src: 'images/crops.JFIF', caption: 'fresh crops for maize and corn production' },

            { src: 'images/goats.JFIF', caption: 'Discover the richness of goats products' },
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
		
		
       