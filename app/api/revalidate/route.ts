import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * ISR On-Demand Revalidation Webhook
 * Called by the CMS after any content change to invalidate Next.js cache.
 *
 * POST /api/revalidate
 * Body: { secret: string, tag?: string }
 *
 * Tags match the collection names:
 * "services" | "testimonials" | "health-guide" | "locations" | "settings"
 */
export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { success: false, message: "REVALIDATE_SECRET not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    if (body.secret !== secret) {
      return NextResponse.json(
        { success: false, message: "Invalid secret" },
        { status: 401 }
      );
    }

    // Revalidate specific tag or all known tags
    const tags = body.tag
      ? [body.tag]
      : ["services", "testimonials", "health-guide", "locations", "settings"];

    for (const tag of tags) {
      revalidateTag(tag, "default");
    }

    return NextResponse.json({
      success: true,
      message: `Revalidated: ${tags.join(", ")}`,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    );
  }
}
