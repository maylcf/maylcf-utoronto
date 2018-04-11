function sendForm(provinceCode)
{
    setProvinceInformation(provinceCode);
}

function setProvinceInformation(provinceCode)
{
  if (provinceCode == null)
  {
    alert("Province not found.");
    return;
  }

  var taxesContainer = $("#taxes");
  var attractionsContainer = $("#attractions");
  var defaultMessage = $("#result-default-msg");
  var premierContainer = $("#premier");
  var provinceContainer = $("#province");

  // Get Information
  var taxes = "<h5>Tax Information:</h5>";
  taxes = taxes + getTaxes(provinceCode);

  var attractions = "<h5>Attractions:</h5>";
  attractions = attractions + getAttractions(provinceCode);

  var premier = "<h5>Premier:</h5>";
  premier = premier + getPremier(provinceCode);

  var province = "<h5>Province:</h5>";
  province = province + getProvinceName(provinceCode);

  // clear message
  defaultMessage.text("");

  // print tax information
  taxesContainer.append(taxes);
  attractionsContainer.append(attractions);
  premierContainer.append(premier);
  provinceContainer.append(province);
  taxesContainer.focus();
}

function getTaxes(provinceCode)
{
  if (provinceCode == "ON")
  {
    return "Rate Type: HST, Total: 13%";
  }
  else if (provinceCode == "QC")
  {
    return "Rate Type: GST + QST, Total: 14.975%";
  }
  else if (provinceCode == "NS")
  {
    return "Rate Type: HST, Total: 15%";
  }
  else if (provinceCode == "NB")
  {
    return "Rate Type: HST, Total: 15%";
  }
  else if (provinceCode == "MB")
  {
    return "Rate Type: GST+PST, Total: 13%";
  }
  else if (provinceCode == "BC")
  {
    return "Rate Type: GST+PST, Total: 12%";
  }
  else if (provinceCode == "PE")
  {
    return "Rate Type: HST, Total: 15%";
  }
  else if (provinceCode == "SK")
  {
    return "Rate Type: GST + PST, Total: 11%";
  }
  else if (provinceCode == "AB")
  {
    return "Rate Type: GST, Total: 5%";
  }
  else if (provinceCode == "NL")
  {
    return "Rate Type: HST, Total: 15%";
  }
  return "";
}

/*
Ontario - ON
Quebec - QC
Nova Scotia - NS
New Brunswick - NB
Manitoba - MB
British Columbia - BC
Prince Edward Island - PE
Saskatchewan - SK
Alberta - AB
Newfoundland and Labrador	 - NL
*/

function getProvinceName(provinceCode)
{
  if (provinceCode == "ON")
  {
    return "Ontario";
  }
  else if (provinceCode == "QC")
  {
    return "Quebec";
  }
  else if (provinceCode == "NS")
  {
    return "Nova Scotia";
  }
  else if (provinceCode == "NB")
  {
    return "New Brunswick";
  }
  else if (provinceCode == "MB")
  {
    return "Manitoba";
  }
  else if (provinceCode == "BC")
  {
    return "British Columbia";
  }
  else if (provinceCode == "PE")
  {
    return "Prince Edward Island";
  }
  else if (provinceCode == "SK")
  {
    return "Saskatchewan";
  }
  else if (provinceCode == "AB")
  {
    return "Alberta";
  }
  else if (provinceCode == "NL")
  {
    return "Newfoundland and Labrador";
  }
  return "";
}

function getPremier(provinceCode)
{
  if (provinceCode == "ON")
  {
    return "Kathleen Wynne";
  }
  else if (provinceCode == "QC")
  {
    return "Philippe Couillard";
  }
  else if (provinceCode == "NS")
  {
    return "Stephen McNeil";
  }
  else if (provinceCode == "NB")
  {
    return "Brian Gallant";
  }
  else if (provinceCode == "MB")
  {
    return "Brian Pallister";
  }
  else if (provinceCode == "BC")
  {
    return "John Horgan";
  }
  else if (provinceCode == "PE")
  {
    return "Wade MacLauchlan";
  }
  else if (provinceCode == "SK")
  {
    return "Scott Moe";
  }
  else if (provinceCode == "AB")
  {
    return "Rachel Notley";
  }
  else if (provinceCode == "NL")
  {
    return "Dwight Ball";
  }
  return "";
}

function getAttractions(provinceCode)
{
  var attractions = getAttractionsArray(provinceCode);
  var result = "";

  attractions.forEach(function(element) {
    result = result + element + "</br>";
  });

  return result;
}

function getAttractionsArray(provinceCode)
{
  var result = [];

  if (provinceCode == "ON")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "QC")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "NS")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "NB")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "MB")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "BC")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "PE")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "SK")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "AB")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  else if (provinceCode == "NL")
  {
    result[0] = "<a href='http://www.festivalsandeventsontario.ca/events/quinte-west-hops-on-the-water' target='_blank'>Quinte West Hops on the Water</a>";
    result[1] = "<a href='http://www.festivalsandeventsontario.ca/events/stratford-festival' target='_blank'>Stratford Festival</a>";
  }
  return result;
}
