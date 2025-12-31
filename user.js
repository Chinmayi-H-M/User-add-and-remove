let form = document.querySelector("form");
let username = document.querySelector("#username");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();

    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        form.reset();
        this.renderUi();

    },
    renderUi: function () {
        document.querySelector(".users").innerHTML = "";
        this.users.forEach(function (user) {

            const card = document.createElement("div");
            card.className =
                "bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg";


            const img = document.createElement("img");
            img.src = user.photo;
            img.className =
                "w-20 h-20 rounded-full mx-auto mb-4 border border-gray-500";


            const name = document.createElement("h3");
            name.className = "text-lg font-semibold";
            name.textContent = user.username;


            const role = document.createElement("p");
            role.className = "text-sm text-gray-300";
            role.textContent = user.role;


            const bio = document.createElement("p");
            bio.className = "text-xs text-gray-400 mt-2";
            bio.textContent = user.bio;

            const btn = document.createElement("button");
            btn.className = "mt-4 px-4 py-2 bg-blue-600 hover:bg-red-700 rounded-lg text-sm";
            btn.textContent = "Remove User";
            btn.addEventListener("click", () => {
                userManager.removeUser(user);
            });


            card.append(img, name, role, bio, btn);

            document.querySelector(".users").appendChild(card);
        }
        );
    },
    removeUser: function (user) {
        this.users = this.users.filter(u => u !== user);
        this.renderUi();
    },
};
userManager.init();
console.log(userManager.users);