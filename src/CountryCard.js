function CountryCard({item}) {
    return (
        <>
            <div className="countryCard">
                <img src={item.flags.png} alt={item.name.common} className='flag' />
                <p>{item.name.common}</p>
            </div>
        </>
    )
}

export default CountryCard;
