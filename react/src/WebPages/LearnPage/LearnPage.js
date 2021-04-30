import React from 'react';
import './LearnPage.css';
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
                        <InvestingTermCard label="Marketcap">
                            <p>Market cap refers to the
                            total dollar market value of a company's
                            outstanding shares of stock. It is
                            calculated by multiplying the total
                            number of a company's outstanding shares
                               by the current market price of one share.</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="EPS">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Common Stock">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Cash">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Marketcap">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="EPS">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Common Stock">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Cash">
                            <p>text</p>
                        </InvestingTermCard>
                    </div>
                    <div className="learn-page-column-container">
                        <InvestingTermCard label="PE Ratio">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Dividend">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Perferred Stock">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Bond">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="PE Ratio">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Dividend">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Perferred Stock">
                            <p>text</p>
                        </InvestingTermCard>
                        <InvestingTermCard label="Bond">
                            <p>text</p>
                        </InvestingTermCard>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LearnPage;