import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Swapper } from "../scripts/bot/swapper";
import { SolanaSwapDapp } from "../target/types/solana_swap_dapp";

describe("solana-swap-dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaSwapDapp as Program<SolanaSwapDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    let swapper = new Swapper();
    console.log(swapper.program)
  });
});
