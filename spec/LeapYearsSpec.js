describe('#Leap', function() {
  it('is a leap year if divisible by 4', function() {
    expect(leap(4)).toEqual(true)
  });

  it('is not a leap year if not divisible by 4', function() {
    expect(leap(3)).toEqual(false)
  });
});
