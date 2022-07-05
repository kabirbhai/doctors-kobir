import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <section>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <p>
            If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. A sequi vel ut earum
            molestias error est minus in necessitatibus. Sapiente eaque magni
            libero molestiae excepturi. Velit, reprehenderit eligendi. Porro,
            repellat.
          </p>
          <div className="flex items-center mt-4">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{review.name}</h1>
              <h1>{review.location}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
