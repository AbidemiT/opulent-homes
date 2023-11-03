<template>
    <div class="asset-details__wrapper">
        <div class="detail-row assets-story">
            <h3>Asset Story</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
        </div>
        <div class="detail-row basic-details">
            <h3>Basic Details</h3>
            <div class="breakdown basic-details">
                <div class="left">
                    <div class="ab-content">
                        <p>Price Per Slice</p>
                        <h3>N657,00,000</h3>
                    </div>
                    <div class="ab-content">
                        <p>Capital Appreciation</p>
                        <h3>10%</h3>
                    </div>
                    <div class="ab-content">
                        <p>Rental Income</p>
                        <h3>20%</h3>
                    </div>
                    <div class="ab-content">
                        <p>Available Units</p>
                        <h3>300</h3>
                    </div>
                </div>
                <div class="right">
                    <h4>Location</h4>
                    <div class="map__container">
                        <img src="../../../../assets/imgs/map.png" alt="location">
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-row files-document">
            <h3>Files & Document</h3>
            <div class="breakdown files-document">
                <div class="document">
                    <div class="document-details">
                        <h4>Name of document.pdf</h4>
                        <p>11 Sep, 2023 | 12:24pm . 13MB</p>
                    </div>
                    <span class="-icon">
                        <i class="eyes"></i>
                    </span>
                </div>
                <div class="document">
                    <div class="document-details">
                        <h4>Name of document.pdf</h4>
                        <p>11 Sep, 2023 | 12:24pm . 13MB</p>
                    </div>
                    <span class="-icon">
                        <i class="eyes"></i>
                    </span>
                </div>
                <div class="document">
                    <div class="document-details">
                        <h4>Name of document.pdf</h4>
                        <p>11 Sep, 2023 | 12:24pm . 13MB</p>
                    </div>
                    <span class="-icon">
                        <i class="eyes"></i>
                    </span>
                </div>
                <div class="document">
                    <div class="document-details">
                        <h4>Name of document.pdf</h4>
                        <p>11 Sep, 2023 | 12:24pm . 13MB</p>
                    </div>
                    <span class="-icon">
                        <i class="eyes"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="detail-row financials">
            <h3>Financials</h3>
            <div class="breakdown financials">
                <select name="transactions" id="transactions">
                    <option value="transactions">Transactions</option>
                    <option value="transactions">Transactions</option>
                    <option value="transactions">Transactions</option>
                </select>
                <select name="income" id="income">
                    <option value="Income Breakdown">Income Breakdown</option>
                    <option value="Income Breakdown">Income Breakdown</option>
                    <option value="Income Breakdown">Income Breakdown</option>
                </select>
            </div>
        </div>
        <div class="invest-button">
            <button class="">Invest</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.asset-details__wrapper {

    h3,
    h4 {

        font-weight: 700;
    }

    p {
        color: #7C859E;
    }

    .invest-button {
        margin-top: 40px;
        text-align: right;
        margin-right: 100px;
        
        button {
            border-radius: 6px;
            background: linear-gradient(113deg, #FF8F63 14.71%, #F26B35 100.23%);
            padding: 12px 60px;
            color: #fff;

        }
    }

    .detail-row {
        display: grid;
        grid-template-columns: 120px 75%;
        column-gap: 154px;
        padding-top: 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid #EBEFF4;

        h3 {
            font-size: 0.875em;
            font-weight: 700;
            width: 120px;
            color: #02B8CF;
        }

        p {
            font-size: 0.9375em;
            line-height: 30.8px;
        }

        .breakdown {
            width: 100%;
            border-radius: 7px;
            border: 1px solid #D5E1EE;
            background: #FFF;
            padding: 18px 30px;

            h3,
            h4 {
                color: #0F4C59;
            }

            h3 {
                font-size: 1.125em;
            }

            &.financials {
                display: flex;
                justify-content: space-between;

                select {
                    width: 308px;
                    padding: 13px 18px;
                    border-radius: 16px;
                    border: 0.3px solid #7C859E;
                    background: #FFF;
                    outline: none;
                }
            }

            &.basic-details {
                display: grid;
                grid-template-columns: 60% 30%;
                column-gap: 10%;
                align-items: center;

                .map__container {
                    margin-top: 4px;
                    width: 190px;
                    height: 116px;
                }

                .left {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            &.files-document {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: space-between;
                row-gap: 28px;



                .document {
                    display: flex;
                    align-items: center;
                    column-gap: 16px;

                    &:nth-child(even) {
                        justify-self: flex-end;
                    }
                }
            }
        }
    }
}
</style>