const loadPhone = async (searchText = "13", isShowAll) => {
  const res = await fetch(`
  https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phone-container-id");
  // clear phone container cards before adding new phone cards
  phoneContainer.textContent = "";

  // display show all btn if >12 phones
  const showAllContainer = document.getElementById("show-all-phones");
  if (phones.length > 6 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  // display first  phones
  if (!isShowAll) {
    phones = phones.slice(0, 6);
  }

  phones.forEach((phone) => {
    console.log(phone);
    // 1. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-200 shadow-xl p-4 my-8`;
    // 3. set inner HTML
    phoneCard.innerHTML = `
        <figure>
            <img
            src="${phone.image}"
            alt="{}"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
            </div>
        </div>
            `;

    // 4. appendChild
    phoneContainer.appendChild(phoneCard);
  });
  // hide loading container
  toggleLoadingSpinner(false);
};

//  handle search button
const handleSearch = (isShowAll) => {
  // toggleLoadingSpinner();
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
};

// handle search recap
const handleSearch2 = () => {
  toggleLoadingSpinner(true);

  const searchField = document.getElementById("search-field-2");
  const searchText = searchField.value;
  loadPhone(searchText);
};

// loading spinner function
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");

  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle show all
const showAll = () => {
  handleSearch(true);
};

// show details modal
const handleShowDetails = async (id) => {
  // console.log(id);

  // load single data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );

  const data = await res.json();
  // console.log(data);
  const phone = data.data;

  showPhoneDetails(phone);
};

const showPhoneDetails = (phone) => {
  console.log(phone);
  // get data
  const phoneName = document.getElementById("show-details-phone-name");
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById("show-details-container");

  showDetailContainer.innerHTML = `  
  <img src="${phone.image}" alt="" />
  <p>
    <span>Storage: ${phone?.mainFeatures.storage} </span>
  </p>;


  `;
  // show the modal
  my_modal_5.showModal();
};

loadPhone();
