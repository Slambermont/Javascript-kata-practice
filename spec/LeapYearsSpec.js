describe('#Leap', function() {
  it('is a leap year if divisible by 4', function() {
    expect(leap(4)).toEqual(true)
  });

  it('is not a leap year if not divisible by 4', function() {
    expect(leap(3)).toEqual(false)
  });

  it('it not a leap year if divisible by 100', function() {
    expect(leap(200)).toEqual(false)
  })

  it('it is a leap year if divisible by 400', function() {
    expect(leap(400)).toEqual(true)
  })
});
