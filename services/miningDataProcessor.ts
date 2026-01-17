
/**
 * Mining Data Processor: Heuristic analysis for real-time telemetry.
 * Provides immediate tactical insights based on predefined thresholds.
 */

export interface TacticalInsight {
  id: string;
  type: 'Performance' | 'Health' | 'Security' | 'Yield' | 'Misuse';
  message: string;
  severity: 'Info' | 'Warning' | 'Critical';
}

export const processMiningTelemetryHeuristics = (stats: {
  hashRate: number;
  efficiency: number;
  uptime: number;
  harnessedValue: number;
  walletsHarnessed: number;
}): TacticalInsight[] => {
  const insights: TacticalInsight[] = [];

  // Efficiency Heuristics: Detecting energy conversion anomalies
  if (stats.efficiency < 92) {
    insights.push({
      id: 'EFF-LOW',
      type: 'Performance',
      message: 'Critical drop in hashing efficiency. Circuitry degradation or thermal throttling detected.',
      severity: 'Critical'
    });
  } else if (stats.efficiency < 96) {
    insights.push({
      id: 'EFF-WARN',
      type: 'Performance',
      message: 'Efficiency is sub-optimal. Review thermal dissipation thresholds.',
      severity: 'Warning'
    });
  }

  // Uptime Heuristics: Ensuring network persistence
  if (stats.uptime < 99.5) {
    insights.push({
      id: 'UP-LOW',
      type: 'Health',
      message: 'Connection instability detected. Check SGL-4 satellite uplink integrity.',
      severity: 'Warning'
    });
  }

  // Hashrate Heuristics: Performance baseline validation
  if (stats.hashRate < 120) {
    insights.push({
      id: 'HASH-LOW',
      type: 'Performance',
      message: 'Significant processing drop. System may be under external throttling pressure.',
      severity: 'Critical'
    });
  } else if (stats.hashRate > 220) {
    insights.push({
      id: 'HASH-HI',
      type: 'Yield',
      message: 'Optimal hashrate trajectory. Rig is operating at peak pythagorithmic capacity.',
      severity: 'Info'
    });
  }

  // Security & Misuse Guardrails
  if (stats.walletsHarnessed > 50 && stats.efficiency > 99.5) {
    insights.push({
      id: 'MISUSE-ALERT',
      type: 'Misuse',
      message: 'Unusual wallet capture velocity detected. Rig may be exceeding ethical harvest guardrails.',
      severity: 'Warning'
    });
  }

  if (stats.hashRate > 245) {
    insights.push({
      id: 'SAFETY-INTERLOCK',
      type: 'Misuse',
      message: 'Over-clocking detected. Hardware integrity at risk. Engage safety interlock.',
      severity: 'Critical'
    });
  }

  return insights;
};
