document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("[data-collapse-toggle]");
  const navbarMenu = document.getElementById("navbar-hamburger");

  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
  });
});

function showProfile(pembicara) {
  let profileContent = "";
  if (pembicara === "einstein") {
    profileContent = `
            <h3 class="text-2xl font-bold text-gray-900">Albert Einstein</h3>
            <p class="mt-4 text-gray-700">Albert Einstein adalah seorang fisikawan yang dikenal dengan teori relativitasnya yang mengubah cara pandang kita terhadap ruang dan waktu. Beliau juga merupakan salah satu ilmuwan paling terkenal di dunia.</p>
          `;
  } else if (pembicara === "oppenheimer") {
    profileContent = `
            <h3 class="text-2xl font-bold text-gray-900">J. Robert Oppenheimer</h3>
            <p class="mt-4 text-gray-700">J. Robert Oppenheimer adalah seorang fisikawan teoretis yang dikenal sebagai "bapak bom atom" karena perannya dalam proyek Manhattan yang mengembangkan senjata nuklir pertama.</p>
          `;
  } else if (pembicara === "planck") {
    profileContent = `
            <h3 class="text-2xl font-bold text-gray-900">Max Planck</h3>
            <p class="mt-4 text-gray-700">Max Planck adalah seorang fisikawan Jerman yang dikenal sebagai pendiri teori kuantum, yang mengubah paradigma fisika modern dan memiliki dampak besar pada teknologi masa depan.</p>
          `;
  }
  document.getElementById("profile").innerHTML = profileContent;
}
