// Example JavaScript code for handling the quadratic solver and point charge solution.
// You can expand this with actual implementation later.

function solveQuadratic(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant >= 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `Roots are: x1 = ${root1}, x2 = ${root2}`;
  } else {
    return 'No real roots.';
  }
}

function calculatePointCharge(q, r) {
  const k = 8.99e9; // Coulomb's constant
  const electricField = (k * Math.abs(q)) / (r * r);
  return `Electric field strength is: E = ${electricField} N/C`;
}

// Example usage
document.getElementById('solver-output').innerText = solveQuadratic(1, -3, 2); // Example coefficients
document.getElementById('charge-output').innerText = calculatePointCharge(
  1e-6,
  0.1
); // Example charge and distance
