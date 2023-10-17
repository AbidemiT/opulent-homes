const currencyFormatter = (amount: number | bigint) => {
    return new Intl.NumberFormat().format(amount)
}

export default currencyFormatter;