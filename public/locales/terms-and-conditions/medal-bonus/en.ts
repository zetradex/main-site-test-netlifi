import { MedalBonusLocaleType } from "./types";

export default {
  TheMedalBonusAgreement: "The Medal Bonus Agreement",
  Chapter1: "Chapter 1. General conditions, terminology",
  Chapter1_1:
    "1.1  This agreement is made between the Zetradex Holding LTD Company (hereinafter referred to as the Company) and the Company’s client. According to the agreement, the Company provides for use on the payment basis, and the client accepts funds in the form of a non-withdrawable bonus (Medal bonus), for the purpose of trading and making a profit which can be withdrawn under certain conditions.",
  Chapter1_2:
    "1.2 The receipt of a bonus does not prevent the withdrawal of funds and profit, but these events may affect the further amount of the bonus on the trading account.",
  Chapter1_3:
    "1.3. The bonus cannot be granted to an account that already had any other bonuses as it requires special settings that are incompatible with the settings of other bonuses.",
  Chapter1_4:
    "1.4 Bonus can be received to the first deposit only, maximum 5 accounts. If the initial deposit has been divided by 2 parts and credited at the same time bonus would be granted to the first part while the second part is considered as the second deposit and consequently hasn’t bonus according to this Agreement.",
  Chapter1_5:
    "1.5 Amount of the Medal bonus has been determined on the level 333% over the first deposit.",
  Chapter1_6:
    "1.7 Both bonuses can’t be added to the same account but can be added and used with different accounts at the same time.",
  Chapter1_7:
    "1.8 Margin level is a proportion of equity to margin, on which platform determines stop out and margin-call.",
  Chapter1_8:
    "1.9 By receiving this bonus on their trading accounts, the client confirms that he has read and agrees to the terms of the bonus.",
  Chapter2: "Chapter 2. Rights and obligations of the parties",
  Chapter2_1:
    "2.1 The Client has the right to receive a bonus for a maximum of 5 (five) accounts, as well as to benefit from the received bonuses in the course of trading, within the trading strategies not prohibited by clauses of the Client Agreement.",
  Chapter2_2:
    "2.2. The client has the right to request a bonus, if it was previously requested, but not automatically granted, within a week after the deposit.",
  Chapter2_3:
    "2.3. The Company does not have the right under this Agreement to establish additional requirements, such as the volume of lots traded or the time frame for trading.",
  Chapter2_4:
    "2.4. The Company doesn’t set the maximum of bonuses that can be added to the first deposit.",
  Chapter2_5:
    "2.5 The Company shall change the leverage to 1:1000 if it was higher, with the aim to add a bonus on account. After bonus cancellation, a client can increase the leverage to higher volume as it was before.",
  Chapter2_6:
    "2.6. The Company has the right to cancel the bonus if the client violated terms and conditions of the Client Agreement and abuse with bonuses. The client agrees that in case the Company detects facts of bonus fraud, the client's transactions may be invalidated and the trading results may be canceled. In this case, the Company is not responsible for the consequences, such as stop-out and related losses.",
  Chapter2_7:
    "2.7 The Company has the right to cancel the bonus if margin level is below 100% which indicates significant drawdown and incorrect use of the bonus, no matter if margin level restores soon or not.",
  Chapter3:
    "Chapter 3. Financial side, detailing the work of the bonus (accrual, cancellation procedure, withdrawals).",
  Chapter3_1:
    "3.1. In order to ensure the correct work of the bonus system and profit distribution, the Company strongly recommends that all transactions be closed before withdrawing money.",
  Chapter3_2:
    "3.2. In case of a significant drawdown of funds, the Company automatically checks the need to cancel the bonus using the following formulas:",
  Chapter3_2_1: "Bonus will be canceled or saved, depending on the proportion:",
  Chapter3_2_3:
    "where: Y = deposit, withdrawable part of the balance, P = achieved trading result (profit), Z = Medal bonus",
  Chapter3_2_4: "Example",
  Chapter3_2_5: "Deposit 100$",
  Chapter3_2_6: "bonus = $333",
  Chapter3_2_7: "Profit = -65$",
  Chapter3_2_8: "We check with formula and see maximum drawdown:",
  Chapter3_2_9:
    "Bonuses will be canceled because profit = -65 which is less than -44.74 level",
  Chapter3_3:
    "3.3. When withdrawing, the bonus will be canceled as soon as we receive your request due to a change of proportion between deposit and bonuses. ",
  Chapter3_4:
    "3.4. Profit received from the bonus is calculated and credited in a proportional amount between both: deposit and bonus parts every time you close a deal. Every deal affects the distribution of profits across balance sheets in different ways. The profit that becomes part of the bonus can be considered as payment for provided bonuses and cannot be returned to the client if the bonus provision service is provided in full. To decrease payment for Medal bonus, clients are eligible to replenish accounts with their own funds, with the aim to change proportion between own money and bonuses in its favor.",
  Chapter3_5:
    "3.5. Both parties may declare early termination of this Agreement. The Company undertakes to cancel the bonus, at the request of the Client, without giving reasons. The Company, in turn, also reserves the right to cancel the bonus and withdraw from this agreement, since the bonus is the property of the Company.",
} as MedalBonusLocaleType;
