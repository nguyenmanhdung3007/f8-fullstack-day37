import placeholder from "@/assets/placeholder.png";
import { useEffect, useState } from "react";

function EditAvatar() {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file?.type);

    // if (!file) return;

    if (!file?.type?.startsWith("image/")) {
      alert("Vui lòng chọn file ảnh!");
      setAvatarUrl("");
      return;
    }

    console.log(file);

    setAvatarUrl(file ? URL.createObjectURL(file) : "");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 font-bold">Edit Avatar</h1>
      <label className="group relative cursor-pointer text-center overflow-hidden rounded-full">
        <input type="file" name="" id="" hidden onChange={handleChange} />
        <img
          src={avatarUrl || placeholder}
          alt=""
          accept="image/*"
          className="w-50 h-50 rounded-full object-cover"
        />
        <span className="absolute text-white font-semibold inset-0 bg-black/40 hidden group-hover:flex rounded-full items-center justify-center">
          Click để chọn ảnh
        </span>
      </label>
    </div>
  );
}

export default EditAvatar;

