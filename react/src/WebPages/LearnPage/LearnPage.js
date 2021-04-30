import React from 'react';
import './LearnPage.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import InvestingTermCard from "../../Components/InvestingTerms/InvestingTermCard.js";


function LearnPage() {
    return (
        <div className="learn-page">
            <div className="learn-banner">
                <h1 className="learn-banner-title">Learn About Investing</h1>
            </div>
            <div className="learn-page-column-container">
                <div className="learn-page-row-container">
                    <div className="learn-page-column-container">
                        <InvestingTermCard label="What is the stock market?">
                            <p>The stock market is where buyers and sellers come together to trade shares in eligible companies.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="What is an investment?">
                            <p>An investment is an asset bought by an individual or organization with the expectation that
                                it will generate some future income or profit. Examples of investments may include stocks and real estate.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Why should I care about investing?">
                            <p>Investing has the potential to help build wealth more effectively than using a savings account.
                               The sooner you invest, the longer you give your money the chance to grow.
                                Keeping your money in a savings account does not help it grow and it loses value due to inflation.
                              Compounding returns is the idea that growth drives more growth which can help your money accumulate at a faster rate.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Inflation">
                            <p>Inflation is a general rise in the price level of an economy over a period of time.
                               When the general price level rises, each unit of currency buys fewer goods and services.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Marketcap">
                            <p>Market cap refers to the
                            total dollar market value of a company's
                            outstanding shares of stock. It is
                            calculated by multiplying the total
                            number of a company's outstanding shares
                               by the current market price of one share.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="EPS">
                            <p>Earnings per share is the monetary value of earnings per outstanding share of common stock for a company.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Common Stock">
                            <p>Common stock is a form of corporate equity ownership, a type of security.
                                The terms voting share and ordinary share are also used frequently outside of the United States.
                                They are known as equity shares or ordinary shares in the UK and other Commonwealth realms.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Cash">
                            <p>A cash investment is a short-term obligation, usually fewer than 90 days, that provides a return in the form of interest payments.
                                Cash investments generally offer a low return compared to other investments.</p>
                        </InvestingTermCard>
                    </div>
                    <div className="learn-page-column-container">
                        <InvestingTermCard label=" Where can I begin to invest? ">
                            <p>Some popular and easy to use investment applications include Robinhood and Fidelity.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Steps to do before you begin investing. ">
                            <p>1. Set Goals.
                               2. Pay off all high interest debt.
                               3. Create an emergecy fund. </p>
                        </InvestingTermCard>
                        <InvestingTermCard label="How do I know in what I should invest my money in?">
                            <p>Begin by investing in index funds to learn the basics of investing.
                                Index funds are passively managed and have lower fees than actively managed funds, and often generate higher investment returns.
                                Index funds are well-diversified investments.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="PE Ratio">
                            <p>The price-earnings ratio,
                                also known as P/E ratio, P/E, or PER,
                                is the ratio of a company's share price to the company's earnings per share.
                                The ratio is used for valuing companies and to find out whether
                                they are overvalued or undervalued.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Dividend">
                            <p>A sum of money paid regularly (typically quarterly)
                            by a company to its shareholders out of its profits (or reserves).</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Perferred Stock">
                            <p>Preferred stock is a component of share capital which may have any combination
                                of features not possessed by common stock including properties of both an equity and a debt instrument,
                                and is generally considered a hybrid instrument.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Bond">
                            <p>A bond is a fixed income instrument that represents
                                a loan made by an investor to a borrower (typically corporate or governmental). A bond could be thought of as an I.O.U.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="What is the difference of preferred stock vs common stock?">
                            <p>The main difference between preferred and common stock is that preferred stock gives no voting rights to shareholders while common stock does.
                                Preferred shareholders have priority over a company's income, meaning they are paid dividends before common shareholders.</p>
                        </InvestingTermCard>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default LearnPage;