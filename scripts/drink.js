function whatCanIdrink(age){
    if (age < 0)
    return "Sorry I can't what becuase that is incorrect!"
    else if ((age > 0) && (age < 14))
    return "Drink Toddy"
    else if ((age > 14) && (age < 18))
    return "Drink Coke"
    else if ((age > 18) && (age < 21))
    return "Drink Beer"
    else if ((age > 21) && (age < 130))
    return "Drink Whiskey"
    else "Sorry. I can’t tell what drink because that age is incorrect!"
}
age =-1
console.log(whatCanIdrink);