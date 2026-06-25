async function GetAllServices() {

    const response = await fetch("services.json");

    const services = await response.json();

    return services;

}