function calculateTriangleArea(side1, side2, side3) {
  // Formula to calculating the semiperimeter of a triangle
  let semiperimeter = (1 / 2) * (side1 + side2 + side3);

  // Using Heron's formula to find an area of a triangle
  let area = Math.sqrt(
    semiperimeter *
      ((semiperimeter - side1) *
        (semiperimeter - side2) *
        (semiperimeter - side3))
  );

  return area;
}

// Function test call
console.log(calculateTriangleArea(8, 14, 12));
