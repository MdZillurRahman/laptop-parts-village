import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToolDetail from "../../Hooks/useToolDetail";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [tool] = useToolDetail(id);
  const { name, _id, img, price, minOrderQuantity, availableQuantity } = tool;
  const { register, setValue } = useForm();
  const navigate = useNavigate();

  const quantity = useRef("");

  const handleQuantity = () => {
    const newQuantity = quantity.current.value;
    if (newQuantity < minOrderQuantity - 1 || newQuantity > availableQuantity) {
      toast(
        `Minimum Order quantity is ${minOrderQuantity}. Please select a value between ${minOrderQuantity} and ${availableQuantity}`
      );
      document.querySelector(".orderButton").disabled = true;
    } else {
      document.querySelector(".orderButton").disabled = false;
    }
  };

  const handlePurchase = (event) => {
    event.preventDefault();
    const newQuantity = quantity.current.value;
    const final = newQuantity * price;

    const purchase = {
      toolId: _id,
      tool: name,
      price: final,
      availableQuantity: availableQuantity,
      quantity: newQuantity,
      userName: user.displayName,
      userEmail: user.email,
      phone: event.target.phoneNumber.value,
    };

    fetch(
      "https://laptop-parts-village-server-site-production.up.railway.app/purchase",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(purchase),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Purchased");
      });

    fetch(
      `https://laptop-parts-village-server-site-production.up.railway.app/tools/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ availableQuantity, newQuantity }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    navigate("/dashboard/orders");
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div className="card card-compact w-lg bg-base-100 shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-bold text-primary mb-6">
            {name}
          </h2>
          <figure>
            <img className="rounded-lg" src={img} alt="Shoes" />
          </figure>
        </div>
        <form onSubmit={handlePurchase}>
          <div className="card-body">
            <div className="form-control w-full max-w-full">
              <p className="font-bold text-lg mr-2">Name: </p>
              <input
                type="text"
                disabled
                value={user.displayName}
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <p className="font-bold text-lg mr-2">Email </p>
              <input
                type="text"
                disabled
                value={user.email}
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <p className="font-bold text-lg mr-2">Address: </p>
              <textarea
                required
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div className="form-control w-full max-w-full">
              <p className="font-bold text-lg mr-2">Phone Number: </p>
              <input
                required
                type="phoneNumber"
                className="input input-bordered w-full max-w-full"
                {...register("phoneNumber", {
                  pattern: {
                    value: /[0-9]/,
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-full">
              <p className="font-bold text-lg mr-2">Price per unit: </p>
              <input
                type="text"
                disabled
                value={price}
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <p className="font-bold text-lg mr-2">Available Quantity: </p>
              <input
                disabled
                type="number"
                value={availableQuantity}
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div onChange={handleQuantity}>
              <div className="form-control w-full max-w-full">
                <p className="font-bold text-lg mr-2">Quantity: </p>
                <input
                  ref={quantity}
                  type="quantity"
                  defaultValue={minOrderQuantity}
                  className="input input-bordered w-full max-w-full quantity"
                />
              </div>
            </div>
            <div className="card-actions justify-center mt-12">
              <button
                type="submit"
                className="btn btn-primary orderButton text-white"
              >
                Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
