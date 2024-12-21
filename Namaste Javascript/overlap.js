function overlap(hr, min) {
    hr %= 12; 
    console.log(hr);
    
    const totalMin = hr * 60 + min;
    const next = Math.ceil(totalMin / 65.45) * 65.45;
    const totalNext = (totalMin + next) % (12 * 60); 
    const hour = totalNext / 60 | 0;
    const minute = totalNext % 60;

    console.log(hour+":"+minute)

}

overlap(3, 20)


