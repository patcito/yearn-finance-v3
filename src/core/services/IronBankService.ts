import {
  IronBankService,
  YearnSdk,
  IronBankMarket,
  Position,
  IronBankUserSummary,
  IronBankMarketDynamic,
  CyTokenUserMetadata,
  EnterMarketsProps,
  IronBankGenericGetUserDataProps,
  IronBankTransactionProps,
} from '@types';

export class IronBankServiceImpl implements IronBankService {
  private yearnSdk: YearnSdk;

  constructor({ yearnSdk }: { yearnSdk: YearnSdk }) {
    this.yearnSdk = yearnSdk;
  }

  public async getUserIronBankSummary({ userAddress }: { userAddress: string }): Promise<IronBankUserSummary> {
    const yearn = this.yearnSdk;
    return await yearn.ironBank.summaryOf(userAddress);
  }

  public async getSupportedMarkets(): Promise<IronBankMarket[]> {
    const yearn = this.yearnSdk;
    return await yearn.ironBank.get();
  }

  public async getMarketsDynamicData(marketAddresses: string[]): Promise<IronBankMarketDynamic[]> {
    const yearn = this.yearnSdk;
    return await yearn.ironBank.getDynamic(marketAddresses);
  }

  public async getUserMarketsPositions({
    userAddress,
    marketAddresses,
  }: IronBankGenericGetUserDataProps): Promise<Position[]> {
    const yearn = this.yearnSdk;
    return await yearn.ironBank.positionsOf(userAddress, marketAddresses);
  }

  public async getUserMarketsMetadata({
    userAddress,
    marketAddresses,
  }: IronBankGenericGetUserDataProps): Promise<CyTokenUserMetadata[]> {
    const yearn = this.yearnSdk;
    return await yearn.ironBank.metadataOf(userAddress, marketAddresses);
  }

  public async executeTransaction({
    userAddress,
    marketAddress,
    amount,
    action,
  }: IronBankTransactionProps): Promise<any> {
    // const yearn = this.yearnSdk;
    // return await yearn.ironBank[action](userAddress, marketAddress, amount); // TODO use when sdk uready
    return;
  }

  public async enterMarkets({ marketAddresses }: EnterMarketsProps): Promise<any> {
    // const yearn = this.yearnSdk;
    // return await yearn.ironBank.enterMarkets(marketAddresses); // TODO use when sdk uready
    return;
  }
}
