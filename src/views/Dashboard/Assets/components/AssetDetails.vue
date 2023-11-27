<template>
  <div class="asset-details__wrapper">
    <div class="detail-row assets-story">
      <h3>Asset Story</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
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
            <img src="../../../../assets/imgs/map.png" alt="location" />
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
        <!-- <select name="transactions" id="transactions">
          <option value="transactions">Transactions</option>
          <option value="transactions">Transactions</option>
          <option value="transactions">Transactions</option>
        </select>
        <select name="income" id="income">
          <option value="Income Breakdown">Income Breakdown</option>
          <option value="Income Breakdown">Income Breakdown</option>
          <option value="Income Breakdown">Income Breakdown</option>
        </select> -->
        <div class="custom-view">
          <div class="label-view">
            <span class="-icon"><i class="trans-icon"></i></span>
            Transactions
          </div>
          <span class="-icon"><i class="info-icon"></i></span>
          <div class="drop-view">
            <p>Transactions</p>
            <ul>
              <li><span>Asset Cost</span><span>N25 million</span></li>
              <li><span>Set Up Cost</span><span>N5 million</span></li>
              <li><span>Admin Charge</span><span>N2.5 million</span></li>
              <li><span>Asset Total Value</span><span>N32.5 million</span></li>
            </ul>
          </div>
        </div>
        <div class="custom-view">
          <div class="label-view">
            <span class="-icon"><i class="home-icon"></i></span>
            Income Breakdown
          </div>
          <span class="-icon"><i class="info-icon"></i></span>
          <div class="drop-view">
            <p>Rental History</p>
            <ul>
              <li><span>Gross Income</span><span>N5 million</span></li>
              <li><span>Services Charge</span><span>N5 million</span></li>
              <li><span>Tax</span><span>N5 million</span></li>
              <li><span>Net Income</span><span>N5 million</span></li>
            </ul>
          </div>
        </div>
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
    color: #7c859e;
  }

  .invest-button {
    margin-top: 40px;
    text-align: right;
    margin-right: 100px;

    button {
      border-radius: 6px;
      background: linear-gradient(113deg, #ff8f63 14.71%, #f26b35 100.23%);
      padding: 12px 60px;
      color: #fff;
    }
  }
}
.detail-row {
  display: grid;
  //   grid-template-columns: 120px 75%;
  //   column-gap: 154px;
  grid-template-columns: 15% 75%;
  -moz-column-gap: 10%;
  column-gap: 10%;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ebeff4;

  h3 {
    font-size: 0.875em;
    font-weight: 700;
    width: 120px;
    color: #02b8cf;
  }

  p {
    font-size: 0.9375em;
    line-height: 30.8px;
  }
}
.breakdown {
  width: 100%;
  border-radius: 7px;
  border: 1px solid #d5e1ee;
  background: #fff;
  padding: 18px 30px;

  h3,
  h4 {
    color: #0f4c59;
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
      border: 0.3px solid #7c859e;
      background: #fff;
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
@media (max-width: 869px) {
  .asset-details__wrapper {
    .detail-row {
      grid-template-columns: 1fr;
      &.files-document {
        .detail-row p {
          font-size: 0.7375em;
          line-height: 10.8px;
        }
      }
    }
  }
  .breakdown {
    flex-wrap: wrap;
    row-gap: 10px;
    &.files-document {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 20px;
      .document {
        justify-content: space-between;
        p {
          font-size: 0.73em;
          line-height: 1;
        }
      }
    }
    &.basic-details {
      grid-template-columns: 45% 50%;
      .left {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}

@media (max-width: 590px) {
  .breakdown {
    padding: 18px 0;
    &.financials {
      select {
        width: 100%;
      }
    }
    &.basic-details {
      grid-template-columns: 1fr;
      padding: 18px 20px;
    }
  }
}
</style>
