interface OrExpr {
  to?: string;
  from?: string;
}

export default interface OrQuery {
  $or: OrExpr[];
}
