import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.css";

export default function DemoCarousel() {
  return (
    <div className={styles.container}>
      <Carousel showThumbs={false}>
        {["92c952", "771796", "24f355", "d32776", "f66b97", "56a8c2"].map(
          (id) => (
            <div key={id}>
              <Image
                src={`https://via.placeholder.com/600/${id}`}
                alt="600 by 600 pixel color square"
                width={600}
                height={600}
              />
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}
